const functions = require('firebase-functions')
const admin = require('firebase-admin')

// Connect to DB
const store = admin.firestore()
// Project Default Settings
const PROJECT_DEFAULT_PRIMARY_COLOR = '#6497AD'
const PROJECT_DEFAULT_TIMEZONE = {
  name: '(UTC-07:00) Pacific Time (US & Canada)',
  offset: -7,
}

// Date FNS imports
const format = require('date-fns/format')
const addHours = require('date-fns/add_hours')
const differenceInSeconds = require('date-fns/difference_in_seconds')
const isSameDay = require('date-fns/is_same_day')

// Inspect the query against suggestions in context to determine whether or
// not the agent and ml models should be updated
const inspectForMl = (query, intent, dfContext, context) => {
  const suggestions = dfContext.parameters.suggestions
  const userQuery = dfContext.parameters.originalQuery

  // Check to see if any of the presented selections match the current query
  const queryMatchingSuggestions = suggestions.filter(suggestion => {
    return suggestion.suggestionText.toLowerCase() === query
  })

  if (queryMatchingSuggestions.length > 0) {
    // The user has selected one of the presented suggestions
    const { suggestionText, mlCategory } = queryMatchingSuggestions[0]

    // Create a reference depending on the current project
    const queriesForTrainingRef = store.collection(
      `${context}/queriesForTraining`
    )

    // Attempt to find a document where the userQuery and suggestion text match
    queriesForTrainingRef
      .where('phrase', '==', userQuery)
      .where('selectedSuggestion', '==', suggestionText)
      .where('category', '==', mlCategory)
      .get()
      .then(snap => {
        if (snap.empty) {
          console.log(
            `Doesn't exist: ${userQuery} + ${suggestionText} + ${mlCategory}`
          )
          // The combination of the userQuery and the suggestion text has not occurred
          // so we create a document
          const document = {
            phrase: userQuery,
            occurrences: 1,
            smModelTrained: false,
            categoryModelTrained: false,
            agentTrained: false,
            intent: intent,
            selectedSuggestion: suggestionText,
            category: mlCategory,
          }
          queriesForTrainingRef.add(document)
        } else {
          console.log(
            `Does exist: ${userQuery} + ${suggestionText} + ${mlCategory}`
          )
          // This combination has occurred before, so we increment the occurrences
          snap.forEach(doc => {
            const { occurrences } = doc.data()
            console.log(occurrences)
            queriesForTrainingRef.doc(doc.id).update({
              occurrences: occurrences + 1,
            })
          })
        }
      })
      .catch(e => {
        console.error(e)
      })
  } else {
    console.log(`Didn't match suggestion: ${userQuery}`)
    // The user did not select any of our suggestions, so add the suggestions and
    // query to a collection for human inspection
    const queriesForLabeling = store.collection(`${context}/queriesForLabeling`)

    queriesForLabeling.add({ suggestions, userQuery }).catch(error => {
      res.status(500).send(`Error storing data: ${error}`)
    })
  }
}

// Calculate metrics based on requests
exports = module.exports = functions.https.onRequest(async (req, res) => {
  const reqData = req.body
  if (!reqData) {
    res.status(500).send("The request body doesn't contain expected parameters")
  }
  const currTimestamp = new Date()

  // Check that conversation data exists on the request
  if (!reqData.session || !reqData.queryResult) {
    res.status(500).send('Missing conversation parameters')
  }

  // Check that session ID is valid: projects/project_name/agent/sessions/session_id
  const projectName = reqData.session.split('/')[1]
  if (!projectName) {
    res.status(500).send('Invalid session ID')
  }
  const context = `projects/${projectName}`

  // Get ID's from conversation (session) & intent
  const conversationId = getIdFromPath(reqData.session)
  const currIntent = reqData.queryResult.intent
  const intent = {
    id: getIdFromPath(currIntent.name),
    name: currIntent.displayName,
  }

  // Get project settings
  const settings = await getProjectSettings(projectName)
  const timezoneOffset = settings.timezone.offset

  // Check if the query has the should-inspect-for-ml parameter
  if (reqData.queryResult.outputContexts) {
    for (const dfContext of reqData.queryResult.outputContexts) {
      if (getIdFromPath(dfContext.name) === 'should-inspect-for-ml') {
        console.log('should inspect')
        inspectForMl(
          reqData.queryResult.queryText.toLowerCase(),
          intent,
          dfContext,
          context
        )
      }
    }
  }

  // Check if conversation has a support request
  const hasSupportRequest = intent.name.startsWith('support')
  // Get support type
  let supportType = ''
  if (hasSupportRequest && reqData.queryResult.outputContexts) {
    // Loop through request output contexts array to find the ticket information
    for (let context of reqData.queryResult.outputContexts) {
      if (getIdFromPath(context.name) === 'ticketinfo') {
        // Read the support type from the ticket
        supportType = context.parameters.supportType.toLowerCase()

        // Remove PII data from parameters before storing request data
        context.parameters = { supportType: supportType }
        break
      }
    }
  }

  // Save request data, add timestamp
  reqData.createdAt = admin.firestore.Timestamp.now()
  reqData.intentId = intent.id
  store
    .collection(`${context}/requests`)
    .add(reqData)
    .catch(error => {
      res.status(500).send(`Error storing data: ${error}`)
    })

  // Store aggregate used on export: conversations with requests
  const aggregateRef = store
    .collection(`${context}/aggregate`)
    .doc(conversationId)
  aggregateRef
    .get()
    .then(doc => {
      let conversation = {
        updatedAt: admin.firestore.Timestamp.now(),
      }

      if (doc.exists) {
        aggregateRef.update(conversation)
      } else {
        // Create new conversation doc
        conversation.createdAt = admin.firestore.Timestamp.now()
        conversation.conversationId = conversationId
        aggregateRef.set(conversation)
      }

      // Store request within aggregate conversation
      aggregateRequest(context, reqData, conversationId, intent)

      return
    })
    .catch(error => {
      console.log(`Error storing aggregated data: ${error}`)
    })

  // Store conversation metrics
  const conversationRef = store
    .collection(`${context}/conversations`)
    .doc(conversationId)
  conversationRef
    .get()
    .then(doc => {
      let conversation = {
        updatedAt: admin.firestore.Timestamp.now(),
        lastIntent: intent,
      }

      let newConversation = false
      let newConversationFirstDuration = false
      let newConversationDuration = 0
      let previousConversationDuration = 0
      let shouldCalculateDuration = true

      // The conversation has a support request only if it has been submitted
      const supportRequestSubmitted = intent.name === 'support-submit-issue'
      if (doc.exists) {
        const currConversation = doc.data()
        // Calculate conversation duration (compare creation time with current)
        const duration = differenceInSeconds(
          currTimestamp,
          currConversation.createdAt.toDate()
        )

        // Check to see if this conversation is not a wildcard duration
        shouldCalculateDuration = isSameDay(
          currTimestamp,
          currConversation.createdAt.toDate()
        )

        // calcMetric is used to determine whether the conversation should
        // be including in the calculation yet
        if (!currConversation.calcMetric) {
          newConversationFirstDuration = true
          conversation.calcMetric = true
        }

        // Add the duration to the conversation object
        conversation.duration = duration
        newConversationDuration = duration
        previousConversationDuration = currConversation.duration
        // Change support request flag only if it's true
        if (hasSupportRequest) {
          conversation.hasSupportRequest = supportRequestSubmitted
          conversation.supportRequests = currConversation.supportRequests

          // Add current support request to list if not already there
          if (
            supportType !== '' &&
            !conversation.supportRequests.includes(supportType)
          ) {
            conversation.supportRequests.push(supportType)
          }
        }
        conversationRef.update(conversation)
      } else {
        // Conversation data doesn't exist for this id
        // Flag that the conversation is new for metrics count
        newConversation = true

        // Create new conversation doc
        conversation.createdAt = admin.firestore.Timestamp.now()
        conversation.calcMetric = false
        conversation.hasSupportRequest = supportRequestSubmitted
        conversation.supportRequests =
          hasSupportRequest && supportType !== '' ? [supportType] : []
        conversationRef.set(conversation)
      }

      const supportRequestType = supportRequestSubmitted ? supportType : null

      // Keep record of intents & support requests usage
      storeMetrics(
        context,
        conversationId,
        intent,
        supportRequestType,
        timezoneOffset,
        newConversation,
        newConversationDuration,
        previousConversationDuration,
        newConversationFirstDuration,
        shouldCalculateDuration
      )

      return res.status(200).send('Analytics stored successfully')
    })
    .catch(error => {
      res.status(500).send(`Error storing conversation document: ${error}`)
    })
})

// Regex to retrieve text after last "/" on a path
const getIdFromPath = path => /[^/]*$/.exec(path)[0]

const getDateWithProjectTimezone = timezoneOffset => {
  const currDate = new Date()
  // Get the timezone offset from local time in minutes
  const tzDifference = timezoneOffset * 60 + currDate.getTimezoneOffset()
  // Convert the offset to milliseconds, add to targetTime, and make a new Date
  return new Date(currDate.getTime() + tzDifference * 60 * 1000)
}

const getProjectSettings = async projectName => {
  const settingsRef = store.collection('settings').doc(projectName)
  return await settingsRef
    .get()
    .then(doc => {
      // If setting doesn't exist, add new project setting with default values
      if (!doc.exists) {
        const defaultSettings = {
          name: projectName,
          primaryColor: PROJECT_DEFAULT_PRIMARY_COLOR,
          timezone: PROJECT_DEFAULT_TIMEZONE,
        }
        settingsRef.set(defaultSettings)
        return defaultSettings
      } else {
        return doc.data()
      }
    })
    .catch(error => {
      console.log(`Error getting settings for project ${projectName}:`, error)
      return -7
    })
}

// Aggregate & clean up request data
const aggregateRequest = (context, reqData, conversationId, intent) => {
  aggregateData = {
    conversationId,
    createdAt: admin.firestore.Timestamp.now(),
    language: reqData.queryResult.languageCode,
    intentId: intent.id,
    intentName: intent.name,
    intentDetectionConfidence: reqData.queryResult.intentDetectionConfidence,
    messageText: reqData.queryResult.queryText,
  }

  store
    .collection(`${context}/aggregate/${conversationId}/requests`)
    .add(aggregateData)
    .catch(error => {
      console.log(`Error storing request in conversation: ${error}`)
    })
}

// Metrics:
// - Store intent from conversation & increase occurrences in metric
// - Store support request submitted & increase occurrences
const storeMetrics = (
  context,
  conversationId,
  currIntent,
  supportRequestType,
  timezoneOffset,
  newConversation,
  newConversationDuration,
  previousConversationDuration,
  newConversationFirstDuration,
  shouldCalculateDuration
) => {
  const currentDate = getDateWithProjectTimezone(timezoneOffset)
  const dateKey = format(currentDate, 'MM-DD-YYYY')

  const metricsRef = store.collection(`${context}/metrics`).doc(dateKey)
  metricsRef
    .get()
    .then(doc => {
      if (doc.exists) {
        const currMetric = doc.data()
        let updatedMetrics = {}

        // Update number of conversations and number of
        // conversations with durations
        let numConversations = currMetric.numConversations
        let numConversationsWithDuration =
          currMetric.numConversationsWithDuration
        const oldNumConversations = currMetric.numConversationsWithDuration

        if (newConversationFirstDuration) {
          // The conversation contains a duration
          numConversationsWithDuration += 1
          updatedMetrics.numConversationsWithDuration = numConversationsWithDuration
        }
        if (newConversation && !newConversationDuration) {
          // This is a new conversation, but doesn't have a duration yet
          numConversations += 1
          updatedMetrics.numConversations = numConversations
        }

        // Update average conversation duration
        // A conversation has a duration i.e. more than one request per conversationId
        if (newConversationDuration > 0 && shouldCalculateDuration) {
          let newAverageDuration = 0
          const currAvD = currMetric.averageConversationDuration
          // This is not the first conversation of the day
          if (numConversations > 1 && numConversationsWithDuration > 0) {
            // This is a new conversation, or this is the first duration
            if (newConversation || newConversationFirstDuration) {
              newAverageDuration =
                (currAvD * oldNumConversations + newConversationDuration) /
                numConversationsWithDuration
            } else {
              // This is a continuing conversation, that has already undergone the
              // calculation above
              newAverageDuration =
                (currAvD * oldNumConversations +
                  (newConversationDuration - previousConversationDuration)) /
                numConversationsWithDuration
            }
          } else {
            // This is the first conversation of the day
            newAverageDuration = newConversationDuration
          }
          // Update the average conversations of the day
          updatedMetrics.averageConversationDuration = newAverageDuration
        }

        // Record support request only if it's been submitted
        if (supportRequestType) {
          // Add to number of conversations with support requests
          // Check if the conversationId has already been included, i.e.
          // a conversation has more than one request
          const idInSupportRequests = currMetric.conversationsWithSupportRequests.includes(
            conversationId
          )
          // If the conversation hasn't been accounted for, add the id to the conversations
          // including support requests
          if (!idInSupportRequests) {
            updatedMetrics.conversationsWithSupportRequests = admin.firestore.FieldValue.arrayUnion(
              conversationId
            )
            updatedMetrics.numConversationsWithSupportRequests = currMetric.numConversationsWithSupportRequests += 1
          }

          // Check if current supportRequest is already on the list
          const supportMetric = currMetric.supportRequests.filter(
            request => request.name === supportRequestType
          )[0]

          // Update support metric counters
          if (supportMetric) {
            supportMetric.occurrences++
            updatedMetrics.supportRequests = currMetric.supportRequests
          } else {
            // Create new support request entry on the metric
            const newSupportRequest = {
              name: supportRequestType,
              occurrences: 1,
            }
            updatedMetrics.supportRequests = admin.firestore.FieldValue.arrayUnion(
              newSupportRequest
            )
          }
        }

        // Update the last intent based on conversationId
        const currentExitIntentsCollection = currMetric.dailyExitIntents

        currentExitIntentsCollection[conversationId] = currIntent
        updatedMetrics.dailyExitIntents = currentExitIntentsCollection

        // Use the daily exit intents to calculate an aggregate of exit intents
        // check to see if the conversation is in progress and/or this is a new
        // conversation
        if (newConversation) {
          const exitIntents = currMetric.dailyExitIntents
          let newExitIntents = []
          for (const intent in exitIntents) {
            // Exclude current exit intent, as we aren't sure if this
            // conversation will continue
            if (intent !== conversationId) {
              const currentIntent = exitIntents[intent].name

              // Check to see if this intent is already on the list
              const exitIntentExists = newExitIntents.filter(
                intent => intent.name === currentIntent
              )[0]
              if (exitIntentExists) {
                exitIntentExists.occurrences++
              } else {
                const newExitIntent = {
                  name: exitIntents[intent].name,
                  id: exitIntents[intent].id,
                  occurrences: 1,
                }
                if (newExitIntent.name !== undefined) {
                  newExitIntents.push(newExitIntent)
                }
              }
            }
            updatedMetrics.exitIntents = newExitIntents
          }
        }

        // Check if current intent is already on the list
        const intentMetric = currMetric.intents.filter(
          intent => intent.id === currIntent.id
        )[0]
        // Update intent metric counters
        if (intentMetric) {
          intentMetric.occurrences++

          // Check if current conversation is already included in intent metric, if not increse the sessions counter
          if (!intentMetric.conversations.includes(conversationId)) {
            intentMetric.sessions++
            intentMetric.conversations.push(conversationId)
          }
          updatedMetrics.intents = currMetric.intents
        } else {
          // Create new intent entry on the metric
          const newIntent = {
            id: currIntent.id,
            name: currIntent.name,
            occurrences: 1,
            sessions: 1,
            conversations: [conversationId],
          }
          updatedMetrics.intents = admin.firestore.FieldValue.arrayUnion(
            newIntent
          )
        }

        // Update the metrics collection for this request
        metricsRef.update(updatedMetrics)
      } else {
        // Create new metric entry with current intent & supportRequest
        let currentExitIntent = {}
        currentExitIntent[conversationId] = {
          name: currIntent.name,
          id: currIntent.id,
          occurrences: 1,
        }

        // Add 7 hours to offset firestore's date timestamp
        // to ensure that the date reflects the document id
        const formattedDate = admin.firestore.Timestamp.fromDate(
          addHours(new Date(dateKey), 7)
        )

        metricsRef.set({
          date: formattedDate,
          intents: [
            {
              id: currIntent.id,
              name: currIntent.name,
              occurrences: 1,
              sessions: 1,
              conversations: [conversationId],
            },
          ],
          dailyExitIntents: currentExitIntent,
          exitIntents: [],
          numConversations: 1,
          numConversationsWithDuration: 0,
          averageConversationDuration: 0,
          numConversationsWithSupportRequests: 0,
          supportRequests: supportRequestType
            ? [
                {
                  name: supportRequestType,
                  occurrences: 1,
                },
              ]
            : [],
          conversationsWithSupportRequests: supportRequestType
            ? [conversationId]
            : [],
        })
      }
      return
    })
    .catch(error => {
      console.log(`Error getting metric document with key ${dateKey}:`, error)
    })
}
