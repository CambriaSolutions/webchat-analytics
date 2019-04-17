const cors = require('cors')({ origin: true })
const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

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

// Metrics:
// - Store intent from conversation & increase occurrences in metric
// - Store support request submitted & increase occurrences
const storeMetrics = (conversationId, currIntent, supportRequestType) => {
  const currDate = new Date()
  const dateKey = format(currDate, 'MM-DD-YYYY')

  const metricsRef = store.collection('metrics').doc(dateKey)
  metricsRef
    .get()
    .then(doc => {
      if (doc.exists) {
        const currMetric = doc.data()

        // Record support request only if it's been submitted
        if (supportRequestType) {
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
          date: currDate,
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
  conversationId,
  wasHelpful,
  feedbackList
) => {
  // Update the conversation with a feedback entry
  var conversationRef = store
    .collection('conversations')
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

// -------------------------------------------------------------------------
// ------------------ P U B L I C   F U N C T I O N S ----------------------
// -------------------------------------------------------------------------

// ------------------ S T O R E   A N A L Y T I C S ----------------------

// Calculate metrics based on requests
exports.storeAnalytics = functions.https.onRequest((req, res) => {
  const reqData = req.body
  if (!reqData) {
    res.send(500, "The request body doesn't contain expected parameters")
  }
  const currTimestamp = new Date()

  // Check that conversation data exists on the request
  if (!reqData.session || !reqData.queryResult) {
    res.send(500, 'Missing conversation parameters')
  }

  // Get ID's from conversation (session) & intent
  const conversationId = getIdFromPath(reqData.session)
  const currIntent = reqData.queryResult.intent
  const intent = {
    id: getIdFromPath(currIntent.name),
    name: currIntent.displayName,
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
  store
    .collection('requests')
    .add(reqData)
    .catch(error => {
      res.send(500, `Error storing data: ${error}`)
    })

  // Store conversation metrics
  const conversationRef = store.collection('conversations').doc(conversationId)
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
      storeMetrics(conversationId, intent, supportRequestType)

      return res.send(200, 'Analytics stored successfully')
    })
    .catch(error => {
      console.log('Error getting conversation document:', error)
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

    const wasHelpful = reqData.wasHelpful
    let feedbackList = reqData.feedbackList
    // Get ID's from conversation (session)
    const conversationId = getIdFromPath(reqData.session)

    // Store feedback directly on the conversation
    //storeConversationFeedback(conversationId, wasHelpful, feedbackList)

    // Create/Update metric entry
    const currDate = new Date()
    const dateKey = format(currDate, 'MM-DD-YYYY')

    const metricsRef = store.collection('metrics').doc(dateKey)
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

                  metricsRef.update({ feedback: currMetric.feedback })
                } else {
                  // Create new feedback type entry on the metric
                  const newFeedbackType = {
                    name: feedbackType,
                    occurrences: 1,
                  }
                  metricsRef.update({
                    'feedback.helpful': admin.firestore.FieldValue.arrayUnion(
                      newFeedbackType
                    ),
                    'feedback.positive': currMetric.feedback.positive,
                  })
                }
              }
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

                  metricsRef.update({ feedback: currMetric.feedback })
                } else {
                  // Create new feedback type entry on the metric
                  const newFeedbackType = {
                    name: feedbackType,
                    occurrences: 1,
                  }
                  metricsRef.update({
                    'feedback.notHelpful': admin.firestore.FieldValue.arrayUnion(
                      newFeedbackType
                    ),
                    'feedback.negative': currMetric.feedback.negative,
                  })
                }
              }
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
