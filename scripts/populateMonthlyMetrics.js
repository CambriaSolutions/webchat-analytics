const firebase = require('firebase')
const admin = require('firebase-admin')
const dateFNS = require('date-fns')
var _ = require('lodash')
//process.env.PORT
var config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
}

firebase.initializeApp(config)

const db = firebase.firestore()

// if conversation is end of the month, run this query to add to monthly metrics
// or create a monthly cron job
const updateMonthlyMetrics = async (startDate, endDate) => {
  const metrics = db.collection(`projects/mdhs-csa-dev/metrics`)
  await metrics
    .where('date', '>', new Date(startDate))
    .where('date', '<', new Date(endDate))
    .get()
    .then(async querySnapshot => {
      let fetchedMetrics = []
      querySnapshot.forEach(doc => {
        fetchedMetrics.push({ ...doc.data(), id: doc.id })
      })
      let positive = 0
      let negative = 0
      const helpful = []
      const notHelpful = []
      const supportRequests = []
      const intents = []
      const exitIntents = []
      let numConversations = 0
      let numConversationsWithDuration = 0
      let numConversationsWithSupportRequests = 0
      let averageConversationDuration = 0

      const finalDoc = {}
      const finalFeedback = {}

      fetchedMetrics.map(function(element) {
        // add average conversation duration
        if (element.averageConversationDuration) {
          averageConversationDuration += element.averageConversationDuration
        }
        // add conversations with support requests
        if (element.numConversationsWithSupportRequests) {
          conversationsWithSupportRequests +=
            element.numConversationsWithSupportRequests
        }
        // add number of conversations
        if (element.numConversations) {
          numConversations += element.numConversations
        }
        // add number of conversations with duration
        if (element.numConversationsWithDuration) {
          numConversationsWithDuration += element.numConversationsWithDuration
        }
        // add number of conversations with duration
        if (element.exitIntents.length > 0) {
          element.exitIntents.map(function(intent) {
            exitIntents.push(intent)
          })
        }
        // add intents
        if (element.intents) {
          element.intents.map(function(intent) {
            intents.push({
              id: intent.id,
              name: intent.name,
              occurrences: intent.occurrences,
              sessions: intent.sessions,
            })
          })
        }
        // add feedback
        if (element.feedback) {
          positive += element.feedback.positive
          negative += element.feedback.negative
          if (element.feedback.helpful) {
            element.feedback.helpful.map(function(helpfulArr) {
              helpful.push(helpfulArr)
            })
          }
          if (element.feedback.notHelpful) {
            element.feedback.notHelpful.map(function(notHelpfulArr) {
              notHelpful.push(notHelpfulArr)
            })
          }
        }
        // add support requests
        if (element.supportRequests) {
          element.supportRequests.map(function(request) {
            supportRequests.push(request)
          })
        }
      })

      finalFeedback.helpful = _(helpful)
        .groupBy('name')
        .map((objs, key) => ({
          name: key,
          occurrences: _.sumBy(objs, 'occurrences'),
        }))
        .value()

      finalFeedback.notHelpful = _(notHelpful)
        .groupBy('name')
        .map((objs, key) => ({
          name: key,
          occurrences: _.sumBy(objs, 'occurrences'),
        }))
        .value()

      finalFeedback.positive = positive
      finalFeedback.negative = negative

      const monthStartDate = dateFNS.startOfMonth(
        fetchedMetrics[0].date.toDate()
      )
      finalDoc.date = monthStartDate
      finalDoc.feedback = finalFeedback
      finalDoc.intents = intents
      finalDoc.averageConversationDuration =
        averageConversationDuration / fetchedMetrics.length
      finalDoc.numConversations = numConversations
      finalDoc.numConversationsWithDuration = numConversationsWithDuration
      finalDoc.numConversationsWithSupportRequests = numConversationsWithSupportRequests
      finalDoc.exitIntents = exitIntents
      finalDoc.supportRequests = _(supportRequests)
        .groupBy('name')
        .map((objs, key) => ({
          name: key,
          occurrences: _.sumBy(objs, 'occurrences'),
        }))
        .value()

      await db
        .collection(`monthly_metrics/`)
        .doc('06-19')
        .set(finalDoc)
        .then(async function() {
          console.log('Document successfully written!')
        })
        .catch(function(error) {
          console.error('Error writing document: ', error)
        })
    })
}

updateMonthlyMetrics(
  'June 1, 2019 0:0:0 PM UTC-7',
  'June 30, 2019 11:59:59 PM UTC-7'
)
