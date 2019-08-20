const admin = require('firebase-admin')
const format = require('date-fns/format')

const serviceAccount = require('./testAnalyticsKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://test-chat-analytics.firebaseio.com',
})

const db = admin.firestore()

let conversationsRef = db.collection(`projects/mdhs-csa-dev/conversations`)

const performQuery = async (startDate, endDate) => {
  let dailyMetric = {}

  await conversationsRef
    .where('createdAt', '>', startDate)
    .where('createdAt', '<', endDate)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        let numConversations = 0
        let numConversationsWithDuration = 0
        let conversationsWithSupportRequests = 0
        let conversationDuration = 0
        let exitIntents = {}

        const data = doc.data()

        const day = format(data.createdAt.toDate(), 'MM-DD-YYYY')

        // Make a new day in the daily metric
        if (dailyMetric.hasOwnProperty(day)) {
          // Increment number of conversations
          dailyMetric[day].numConversations += 1

          // If the conversation has a duration, increment number of
          // conversations with a duration (engaged users) and add the
          // duration to the total duration for the day
          if (data.duration && data.duration > 0) {
            dailyMetric[day].conversationDuration += data.duration
            dailyMetric[day].numConversationsWithDuration += 1
          }

          // Add the conversation id of conversations with support requests
          if (data.hasSupportRequest) {
            dailyMetric[day].conversationsWithSupportRequests += 1
          }

          // Increment exit intents per conversation
          if (data.lastIntent) {
            dailyMetric[day].exitIntents[doc.id] = data.lastIntent
          }
        } else {
          dailyMetric[day]
          // Increment number of conversations
          numConversations += 1

          // If the conversation has a duration, increment number of
          // conversations with a duration (engaged users) and add the
          // duration to the total duration for the day
          if (data.duration && data.duration > 0) {
            conversationDuration += data.duration
            numConversationsWithDuration += 1
          }

          // Add the conversation id of conversations with support requests
          if (data.hasSupportRequest) {
            conversationsWithSupportRequests += 1
          }

          // Increment exit intents per conversation
          if (data.lastIntent) {
            exitIntents[doc.id] = data.lastIntent
          }

          dailyMetric[day] = {
            numConversations,
            numConversationsWithDuration,
            conversationsWithSupportRequests,
            conversationDuration,
            exitIntents,
          }
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
  return dailyMetric
}

performQuery(
  new Date('Jun 12 2019 00:00:00 GMT-0700 (Pacific Daylight Time)'),
  new Date('Aug 08 2019 00:00:00 GMT-0700 (Pacific Daylight Time)')
).then(metric => {
  const metricsRef = db.collection(`projects/mdhs-csa-dev/metrics`)

  for (const day in metric) {
    const dayMetric = metricsRef.doc(day)
    const {
      numConversations,
      numConversationsWithDuration,
      conversationsWithSupportRequests,
      conversationDuration,
      exitIntents,
    } = metric[day]
    const averageConversationDuration = Math.round(
      conversationDuration / numConversationsWithDuration
    )

    dayMetric.update({
      averageConversationDuration,
      exitIntents,
      numConversationsWithDuration,
      numConversations,
      conversationsWithSupportRequests,
    })
  }
})
