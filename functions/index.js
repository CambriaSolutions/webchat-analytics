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

// Store intent from conversation & increase occurrences in metric
const storeIntent = (conversationId, currIntent) => {
  const currDate = new Date()
  const dateKey = format(currDate, 'MM-DD-YYYY')

  const metricsRef = store.collection('metrics').doc(dateKey)
  metricsRef
    .get()
    .then(doc => {
      if (doc.exists) {
        const currMetric = doc.data()

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
        // Create new metric entry with current intent
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
        })
      }
      return
    })
    .catch(error => {
      console.log(`Error getting metric document with key ${dateKey}:`, error)
    })
}

// -------------------------------------------------------------------------
// ------------------ P U B L I C   F U N C T I O N S ----------------------
// -------------------------------------------------------------------------

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

      if (doc.exists) {
        const currConversation = doc.data()
        // Calculate conversation duration (compare creation time with current)
        conversation.duration = differenceInSeconds(
          currTimestamp,
          currConversation.createdAt.toDate()
        )

        // Change support request flag only if it's true
        if (hasSupportRequest) {
          conversation.hasSupportRequest = hasSupportRequest
          conversation.supportRequests = currConversation.supportRequests

          // Add current support request to list if not already there
          if (!conversation.supportRequests.includes(supportType)) {
            conversation.supportRequests.push(supportType)
          }
        }
        conversationRef.update(conversation)
      } else {
        // Create new conversation doc
        conversation.createdAt = admin.firestore.Timestamp.now()
        conversation.hasSupportRequest = hasSupportRequest
        conversation.supportRequests = hasSupportRequest ? [supportType] : []
        conversationRef.set(conversation)
      }
      // Keep record of intents usage
      storeIntent(conversationId, intent)

      return res.send(200, 'Analytics stored successfully')
    })
    .catch(error => {
      console.log('Error getting conversation document:', error)
    })
})
