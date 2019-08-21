const admin = require('firebase-admin')
const format = require('date-fns/format')
const fs = require('fs')

const serviceAccount = require('./testAnalyticsKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://test-chat-analytics.firebaseio.com',
})

const db = admin.firestore()

let conversationsRef = db.collection(`projects/mdhs-csa-dev/conversations`)

const performQuery = async (startDate, endDate) => {
  let dailyMetric = {}
  let daysToInspect = []

  await conversationsRef
    .where('createdAt', '>', startDate)
    .where('createdAt', '<', endDate)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        let numConversations = 0
        let numConversationsWithDuration = 0
        let conversationsWithSupportRequests = 0
        let numConversationsWithSupportRequests = 0
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
          // if (data.duration && data.duration > 0) {
          if (data.duration && data.duration > 0 && data.duration < 86400) {
            dailyMetric[day].conversationDuration += data.duration
            dailyMetric[day].numConversationsWithDuration += 1
          }

          // If the duration of the conversation is longer than 1 day
          if (data.duration > 86400) {
            daysToInspect.push({
              day,
              conversationId: doc.id,
              duration: data.duration,
              hours: Math.round(data.duration / 3600),
            })
          }

          // Add the conversation id of conversations with support requests
          if (data.hasSupportRequest) {
            dailyMetric[day].conversationsWithSupportRequests += 1
            dailyMetric[day].numConversationsWithSupportRequests += 1
          }

          // Increment exit intents per conversation
          if (data.lastIntent) {
            dailyMetric[day].exitIntents[doc.id] = data.lastIntent
          }
        } else {
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
          // and increment the number of conversations with support requests counter
          if (data.hasSupportRequest) {
            conversationsWithSupportRequests += 1
            numConversationsWithSupportRequests += 1
          }

          // Increment exit intents per conversation
          if (data.lastIntent) {
            exitIntents[doc.id] = data.lastIntent
          }

          dailyMetric[day] = {
            numConversations,
            numConversationsWithDuration,
            conversationsWithSupportRequests,
            numConversationsWithSupportRequests,
            conversationDuration,
            exitIntents,
          }
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
  fs.writeFile('./daysToInspect.json', JSON.stringify(daysToInspect), err => {
    if (err) throw err
    console.log('Saved!')
  })
  return dailyMetric
}

performQuery(
  new Date('Jun 10 2019 00:00:00 GMT-0700 (Pacific Daylight Time)'),
  new Date('Aug 11 2019 00:00:00 GMT-0700 (Pacific Daylight Time)')
).then(metric => {
  const metricsRef = db.collection(`projects/mdhs-csa-dev/metrics`)

  for (const day in metric) {
    const dayMetric = metricsRef.doc(day)
    dayMetric
      .get()
      .then(doc => {
        const data = doc.data()
        const exitIntents = data.exitIntents
        let newExitIntents = []
        for (const intent in exitIntents) {
          const currentIntent = exitIntents[intent].name
          // check to see if this intent is already on the list
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
            newExitIntents.push(newExitIntent)
          }
        }
        return newExitIntents
      })
      .then(newExitIntents => {
        console.log(newExitIntents)
        const {
          numConversations,
          numConversationsWithDuration,
          conversationsWithSupportRequests,
          numConversationsWithSupportRequests,
          conversationDuration,
          exitIntents,
        } = metric[day]
        const averageConversationDuration = Math.round(
          conversationDuration / numConversationsWithDuration
        )
        dayMetric.update({
          averageConversationDuration,
          exitIntents: newExitIntents,
          intents,
          numConversationsWithDuration,
          numConversationsWithSupportRequests,
          numConversations,
          conversationsWithSupportRequests,
        })
      })
  }
})
