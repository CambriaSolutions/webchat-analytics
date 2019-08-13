const cors = require('cors')({ origin: true })
const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

// Init PII remover
const { SyncRedactor } = require('redact-pii')
const redactor = new SyncRedactor()

// // Google Cloud Storage Setup
// const { Storage } = require('@google-cloud/storage')
// const storage = new Storage({
//   projectId: functions.config().gcs.project_id,
//   credentials: {
//     private_key: functions.config().gcs.private_key.replace(/\\n/g, '\n'),
//     client_email: functions.config().gcs.client_email,
//   },
// })
const bucketName = 'daily-json-exports'

// Project Default Settings
const PROJECT_DEFAULT_PRIMARY_COLOR = '#6497AD'
const PROJECT_DEFAULT_TIMEZONE = {
  name: '(UTC-07:00) Pacific Time (US & Canada)',
  offset: -7,
}

// Connect to DB
const store = admin.firestore()

// Date FNS imports
const format = require('date-fns/format')
const differenceInSeconds = require('date-fns/difference_in_seconds')

// -------------------------------------------------------------------------
// ---------------- P R I V A T E   F U N C T I O N S ----------------------
// -------------------------------------------------------------------------

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

// Metrics:
// - Store intent from conversation & increase occurrences in metric
// - Store support request submitted & increase occurrences
const storeMetrics = (
  context,
  conversationId,
  currIntent,
  supportRequestType,
  timezoneOffset
) => {
  const currDate = getDateWithProjectTimezone(timezoneOffset)
  const dateKey = format(currDate, 'MM-DD-YYYY')

  const metricsRef = store.collection(`${context}/metrics`).doc(dateKey)
  metricsRef
    .get()
    .then(doc => {
      if (doc.exists) {
        const currMetric = doc.data()
        // Record support request only if it's been submitted
        if (supportRequestType) {
          // Add to number of conversations with support requests
          let newConversationsWithRequests = []
          if (
            currMetric.conversationsWithRequests &&
            !currMetric.conversationsWithRequests.includes(conversationId)
          ) {
            newConversationsWithRequests = [
              ...currMetric.conversationsWithRequests,
              conversationId,
            ]
          } else if (
            currMetric.conversationsWithRequests &&
            currMetric.conversationsWithRequests.includes(conversationId)
          ) {
            newConversationsWithRequests = [
              currMetric.conversationsWithRequests,
            ]
          } else {
            newConversationsWithRequests.push(conversationId)
          }
          metricsRef.update({
            conversationsWithRequests: newConversationsWithRequests,
          })

          // Check if current supportRequest is already on the list
          const supportMetric = currMetric.supportRequests.filter(
            request => request.name === supportRequestType
          )[0]
          // Update support metric counters
          if (supportMetric) {
            supportMetric.occurrences++

            metricsRef.update({ supportRequests: currMetric.supportRequests })
          } else {
            // Create new support request entry on the metric
            const newSupportRequest = {
              name: supportRequestType,
              occurrences: 1,
            }
            metricsRef.update({
              supportRequests: admin.firestore.FieldValue.arrayUnion(
                newSupportRequest
              ),
            })
          }
        }

        // Add to last intent array
        const currentExitIntents = currMetric.exitIntents
        let newExitIntents
        let newExitIntent = {}

        if (
          currentExitIntents &&
          currentExitIntents.hasOwnProperty(conversationId)
        ) {
          currentExitIntents[conversationId] = { lastIntent: currIntent }
          newExitIntents = currentExitIntents
        } else if (
          currentExitIntents &&
          !currentExitIntents.hasOwnProperty(conversationId)
        ) {
          newExitIntent[conversationId] = { lastIntent: currIntent }
          newExitIntents = { ...currentExitIntents, newExitIntent }
        } else {
          newExitIntent[conversationId] = { lastIntent: currIntent }
          newExitIntents = newExitIntent
        }

        metricsRef.update({ exitIntents: newExitIntents })

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
          metricsRef.update({ intents: currMetric.intents })
        } else {
          // Create new intent entry on the metric
          const newIntent = {
            id: currIntent.id,
            name: currIntent.name,
            occurrences: 1,
            sessions: 1,
            conversations: [conversationId],
          }
          metricsRef.update({
            intents: admin.firestore.FieldValue.arrayUnion(newIntent),
          })
        }
      } else {
        // Create new metric entry with current intent & supportRequest
        metricsRef.set({
          date: admin.firestore.Timestamp.now(),
          intents: [
            {
              id: currIntent.id,
              name: currIntent.name,
              occurrences: 1,
              sessions: 1,
              conversations: [conversationId],
            },
          ],
          supportRequests: supportRequestType
            ? [
                {
                  name: supportRequestType,
                  occurrences: 1,
                },
              ]
            : [],
        })
      }
      return
    })
    .catch(error => {
      console.log(`Error getting metric document with key ${dateKey}:`, error)
    })
}

const storeConversationFeedback = (
  context,
  conversationId,
  wasHelpful,
  feedbackList
) => {
  // Update the conversation with a feedback entry
  var conversationRef = store
    .collection(`${context}/conversations`)
    .doc(`${conversationId}`)

  // Set the "capital" field of the city 'DC'
  return conversationRef
    .update({
      hasFeedback: true,
      feedback: admin.firestore.FieldValue.arrayUnion({
        helpful: wasHelpful,
        feedback: feedbackList,
      }),
    })
    .catch(error => {
      // The document probably doesn't exist.
      console.error('Error updating document: ', error)
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

// -------------------------------------------------------------------------
// ------------------ P U B L I C   F U N C T I O N S ----------------------
// -------------------------------------------------------------------------

// ------------------ S T O R E   A N A L Y T I C S ----------------------

// Calculate metrics based on requests
exports.storeAnalytics = functions.https.onRequest(async (req, res) => {
  const reqData = req.body
  if (!reqData) {
    res.send(500, "The request body doesn't contain expected parameters")
  }
  const currTimestamp = new Date()

  // Check that conversation data exists on the request
  if (!reqData.session || !reqData.queryResult) {
    res.send(500, 'Missing conversation parameters')
  }

  // Check that session ID is valid: projects/project_name/agent/sessions/session_id
  const projectName = reqData.session.split('/')[1]
  if (!projectName) {
    res.send(500, 'Invalid session ID')
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

  // Remove PII
  reqData.queryResult.queryText = redactor.redact(reqData.queryResult.queryText)

  // Save request data, add timestamp
  reqData.createdAt = admin.firestore.Timestamp.now()
  reqData.intentId = intent.id
  store
    .collection(`${context}/requests`)
    .add(reqData)
    .catch(error => {
      res.send(500, `Error storing data: ${error}`)
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

      // The conversation has a support request only if it has been submitted
      const supportRequestSubmitted = intent.name === 'support-submit-issue'
      if (doc.exists) {
        const currConversation = doc.data()
        // Calculate conversation duration (compare creation time with current)
        conversation.duration = differenceInSeconds(
          currTimestamp,
          currConversation.createdAt.toDate()
        )

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
        // Create new conversation doc
        conversation.createdAt = admin.firestore.Timestamp.now()
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
        timezoneOffset
      )

      return res.send(200, 'Analytics stored successfully')
    })
    .catch(error => {
      res.send(500, `Error storing conversation document: ${error}`)
    })
})

// ------------------ S T O R E   F E E D B A C K ----------------------

// Store feedback from conversations
exports.storeFeedback = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const reqData = req.body
    if (!reqData) {
      res.send(500, "The request body doesn't contain expected parameters")
    }

    // Check that feedback data exists on the request
    if (!reqData.session || typeof reqData.wasHelpful === 'undefined') {
      res.send(500, 'Missing feedback parameters')
    }

    // Check that session ID is valid: projects/project_name/agent/sessions/session_id
    const projectName = reqData.session.split('/')[1]
    if (!projectName) {
      res.send(500, 'Invalid session ID')
    }
    const context = `projects/${projectName}`

    const wasHelpful = reqData.wasHelpful
    let feedbackList = reqData.feedbackList
    // Get ID's from conversation (session)
    const conversationId = getIdFromPath(reqData.session)

    // Store feedback directly on the conversation
    storeConversationFeedback(context, conversationId, wasHelpful, feedbackList)

    // Create/Update metric entry
    const currDate = new Date()
    const dateKey = format(currDate, 'MM-DD-YYYY')

    const metricsRef = store.collection(`${context}/metrics`).doc(dateKey)
    metricsRef
      .get()
      .then(doc => {
        if (doc.exists) {
          const currMetric = doc.data()
          if (currMetric.feedback) {
            if (wasHelpful) {
              currMetric.feedback.positive++
              if (!currMetric.feedback.helpful) currMetric.feedback.helpful = []

              // Loop through feedback sent and update occurrences on DB
              for (let feedbackType of feedbackList) {
                // Check if current feedback type is already on the list
                const existingFeedback = currMetric.feedback.helpful.filter(
                  feedback => feedback.name === feedbackType
                )[0]
                // Update support metric counters
                if (existingFeedback) {
                  existingFeedback.occurrences++
                } else {
                  // Create new feedback type entry on the metric
                  const newFeedbackType = {
                    name: feedbackType,
                    occurrences: 1,
                  }
                  currMetric.feedback.helpful.push(newFeedbackType)
                }
              }
              metricsRef.update({ feedback: currMetric.feedback })
            } else {
              currMetric.feedback.negative++
              if (!currMetric.feedback.notHelpful)
                currMetric.feedback.notHelpful = []

              // Loop through feedback sent and update occurrences on DB
              for (let feedbackType of feedbackList) {
                // Check if current feedback type is already on the list
                const existingFeedback = currMetric.feedback.notHelpful.filter(
                  feedback => feedback.name === feedbackType
                )[0]
                // Update support metric counters
                if (existingFeedback) {
                  existingFeedback.occurrences++
                } else {
                  // Create new feedback type entry on the metric
                  const newFeedbackType = {
                    name: feedbackType,
                    occurrences: 1,
                  }
                  currMetric.feedback.notHelpful.push(newFeedbackType)
                }
              }
              metricsRef.update({ feedback: currMetric.feedback })
            }
          } else {
            feedbackList = feedbackList.map(feedback => ({
              name: feedback,
              occurrences: 1,
            }))
            // Create new metric entry with feedback and empty intent & supportRequest
            metricsRef.update({
              feedback: {
                helpful: wasHelpful ? feedbackList : [],
                notHelpful: wasHelpful ? [] : feedbackList,
                positive: wasHelpful ? 1 : 0,
                negative: wasHelpful ? 0 : 1,
              },
            })
          }
        }
        return res.send(200, 'Feedback stored successfully')
      })
      .catch(error => {
        console.log(
          `Error getting feedback metric document with key ${dateKey}:`,
          error
        )
      })
  })
})

// ------------------  D O W N L O A D   E X P O R T  ----------------------

// Calculate metrics based on requests
// exports.downloadExport = functions.https.onRequest((req, res) => {
//   cors(req, res, () => {
//     const reqData = req.body
//     if (!reqData) {
//       res.send(500, "The request body doesn't contain expected parameters")
//     }

//     // Check that filename exists on the request
//     if (!reqData.filename) {
//       res.send(500, 'Missing file parameters')
//     }

//     const filename = reqData.filename
//     const bucket = storage.bucket(bucketName)
//     let file = bucket.file(filename)

//     file
//       .exists()
//       .then(data => {
//         var exists = data[0]
//         if (exists) {
//           res.setHeader(
//             'Content-disposition',
//             'attachment; filename=' + filename
//           )
//           res.setHeader('Content-type', 'application/json')

//           const readStream = file.createReadStream()
//           return readStream.pipe(res)
//         } else {
//           return res.send(204, "The requested file doesn't exist")
//         }
//       })
//       .catch(err => {
//         res.send(404, "The requested file doesn't exist")
//         return err
//       })
//   })
// })
