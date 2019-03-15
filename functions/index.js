const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)
// Connect to DB
const store = admin.firestore()

// Date FNS imports
const differenceInSeconds = require('date-fns/difference_in_seconds')

// -------------------------------------------------------------------------
// ---------------- P R I V A T E   F U N C T I O N S ----------------------
// -------------------------------------------------------------------------

// Regex to retrieve text after last "/" on a path
const getIdFromPath = path => /[^/]*$/.exec(path)[0]

// Store intent from conversation
const storeIntent = intent => {
  const intentsRef = store.collection('intents').doc(intent.id)
  intentsRef
    .get()
    .then(doc => {
      if (doc.exists) {
        const currIntent = doc.data()
        intentsRef.update({ occurrences: currIntent.occurrences + 1 })
      } else {
        // Create new intent
        intentsRef.set({
          name: intent.name,
          occurrences: 1,
        })
      }
      return
    })
    .catch(error => {
      console.log('Error getting intent document:', error)
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

  // Save request data
  store
    .collection('requests')
    .add(reqData)
    .catch(error => {
      res.send(500, `Error storing data: ${error}`)
    })

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

  // Store conversation metrics
  const conversationRef = store.collection('conversations').doc(conversationId)
  conversationRef
    .get()
    .then(doc => {
      let conversation = {
        updatedAt: admin.firestore.Timestamp.fromDate(currTimestamp),
        lastIntent: intent,
      }

      // Check if conversation has a support request
      const hasSupportRequest = intent.name.startsWith('support')
      let supportType = ''
      if (hasSupportRequest) {
        // Loop through request output contexts array to find the ticket information
        for (let context of reqData.queryResult.outputContexts) {
          if (getIdFromPath(context.name) === 'ticketinfo') {
            // Read the support type from the ticket
            supportType = context.parameters.supportType
            break
          }
        }
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
          // Add current support request to list
          currConversation.supportRequests.push(supportType)
          // Make sure all values are unique
          conversation.supportRequests = [
            ...new Set(currConversation.supportRequests),
          ]
        }
        conversationRef.update(conversation)
      } else {
        // Create new conversation doc
        conversation.createdAt = admin.firestore.Timestamp.fromDate(
          currTimestamp
        )
        conversation.hasSupportRequest = hasSupportRequest
        conversation.supportRequests = hasSupportRequest ? [supportType] : []
        conversationRef.set(conversation)
      }
      // Keep record of intents usage
      storeIntent(intent)

      return res.send(200, 'Analytics stored successfully')
    })
    .catch(error => {
      console.log('Error getting conversation document:', error)
    })
})
