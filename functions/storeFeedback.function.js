const functions = require('firebase-functions')
const cors = require('cors')({ origin: true })
const admin = require('firebase-admin')
const format = require('date-fns/format')

// Connect to DB
const store = admin.firestore()

// Store feedback from conversations
exports = module.exports = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const reqData = req.body
    if (!reqData) {
      res.send(500, "The request body doesn't contain expected parameters")
    }

    // Check that feedback data exists on the request
    if (!reqData.session || typeof reqData.wasHelpful === 'undefined') {
      res.send(500, 'Missing feedback parameters')
    }

    console.log('reqData: ' + JSON.stringify(reqData))

    // If one of the context's name contains 'subject-matter' then this is the context 
    // used to identify the subject matter. But name field has full format
    // e.g. "projects/mdhs-csa-dev/agent/sessions/3c007146-2b0c-99e8-2806-563698d992d4/contexts/cse-subject-matter"
    const outputContextObject = reqData.outputContexts.find(x => x.name.indexOf('subject-matter') >= 0)

    const subjectMatterContext = outputContextObject.name.split('/').pop()

    // Take the first portion of the context name as the subject matter. e.g. for 'cse-account-balance', we use 'cse' 
    const subjectMatter = subjectMatterContext.split('-')[0]

    // const context = `projects/${projectName}`
    const context = `subjectMatters/${subjectMatter}`

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
        console.log(`Error getting feedback metric document with key ${dateKey}:` + error)
      })
  })
})

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

// Regex to retrieve text after last "/" on a path
const getIdFromPath = path => /[^/]*$/.exec(path)[0]
