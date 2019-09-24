require('dotenv').config()
const fs = require('fs')
const automl = require('@google-cloud/automl')
const client = new automl.v1beta1.PredictionServiceClient({})
// const queries = require('./dataFiles_raw/fallbackFullDetails_06-01_07-01')
// const queries = require('./dataFiles_raw/fallbackFullDetails_07-01_08-01')
// const queries = require('./dataFiles_raw/fallbackFullDetails_08-01_09-01')
const queries = require('./dataFiles_raw/fallbackFullDetails_09-01_10-01')

const admin = require('firebase-admin')
const { format } = require('date-fns')
const serviceAccount = require('./analyticsKey.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
})

// Regex to retrieve text after last "/" on a path
const getIdFromPath = path => /[^/]*$/.exec(path)[0]

const db = admin.firestore()
const start = new Date(
  'Sept 21 2019  00:00:00 GMT-0700 (Pacific Daylight Time)'
)
const end = new Date('Sept 24 2019 00:00:00 GMT-0700 (Pacific Daylight Time)')
const startDate = format(start, 'MM-DD')
const endDate = format(end, 'MM-DD')
const intent = {
  name: 'Default Fallback Intent',
  id: 'd832e961-7c6c-4b00-a608-88a5c1c3f3f5',
}

const formattedName = client.modelPath(
  process.env.AUTOML_PROJECT,
  process.env.AUTOML_LOCATION,
  process.env.AUTOML_MODEL
)

const predict = async intentDetails => {
  const queriesToSkip = ['i acknowledge', 'no', 'yes']
  let predictionsWithQuery = []
  let predictionAggregate = {}
  for (const query of intentDetails) {
    if (!queriesToSkip.includes(query.messageText.toLowerCase())) {
      let contexts = []
      if (query.outputContexts.length > 0) {
        query.outputContexts.forEach(context => {
          contexts.push(context.context)
        })
      }

      const payload = {
        textSnippet: {
          content: query.messageText,
          mime_type: 'text/plain',
        },
      }
      const request = {
        name: formattedName,
        payload: payload,
      }
      const responses = await client.predict(request)
      const topCategory = responses[0].payload[0]

      // Aggregate the number of times the category showed up
      if (topCategory.classification.score >= 0.6) {
        if (predictionAggregate[topCategory.displayName]) {
          predictionAggregate[topCategory.displayName].occurences += 1
          predictionAggregate[topCategory.displayName].queries.push(
            query.messageText
          )
          if (contexts) {
            contexts.forEach(context => {
              predictionAggregate[topCategory.displayName].contexts.push(
                context
              )
            })
          }
        } else {
          predictionAggregate[topCategory.displayName] = {
            occurences: 1,
            queries: [query.messageText],
            contexts,
          }
        }
      }
    }
  }

  // Sort the contexts per category
  for (const key in predictionAggregate) {
    const contextArray = predictionAggregate[key].contexts
    let contextsDictionary = {}
    if (contextArray.length > 0) {
      contextArray.forEach(context => {
        if (contextsDictionary[context]) {
          contextsDictionary[context].occurences += 1
        } else {
          contextsDictionary[context] = {
            occurences: 1,
          }
        }
      })
    }
    predictionAggregate[key].contexts = contextsDictionary
  }

  // // Sort the predictions by occurrences
  let sortable = []
  // Save predictions
  for (const prediction in predictionAggregate) {
    console.log(predictionAggregate[prediction])
    sortable.push([
      prediction,
      predictionAggregate[prediction],
      predictionAggregate[prediction].occurences,
    ])
  }

  sortable.sort((a, b) => {
    return b[2] - a[2]
  })

  let sortedAggregate = {}
  sortable.forEach(prediction => {
    sortedAggregate[prediction[0]] = prediction[1]
  })
  console.log(sortedAggregate)

  fs.writeFile(
    `./predictionAggregate_09-01_09-024.json`,
    JSON.stringify(sortedAggregate),
    err => {
      if (err) throw err
      console.log('Saved!')
    }
  )
  // return (predictions = { predictionsWithQuery, predictionAggregate })
}

predict(queries)
// const performQuery = (start, end, intent) => {
//   db.collection(`projects/${process.env.FIREBASE_PROJECT_ID}/requests`)
//     .where('createdAt', '>', start)
//     .where('createdAt', '<', end)
//     .where('intentId', '==', intent.id)
//     .orderBy('createdAt', 'desc')
//     .get()
//     .then(querySnapshot => {
//       let intentDetails = []
//       querySnapshot.forEach(doc => {
//         let tempData = doc.data()
//         intentDetails.push({
//           // Save the detection of confidence
//           intentDetectionConfidence:
//             tempData.queryResult.intentDetectionConfidence,
//           // Save the actual text
//           messageText: tempData.queryResult.queryText,
//           // Save the output context
//           outputContexts: tempData.queryResult.outputContexts
//             ? tempData.queryResult.outputContexts.map(o => ({
//                 ...o,
//                 context: getIdFromPath(o.name),
//               }))
//             : [],
//           // Save the conversation Id in case we want to investigate
//           conversationId: getIdFromPath(tempData.session),
//           // Save when the conversation is created
//           createdAt: format(tempData.createdAt.toDate(), 'MM-DD-YYYY'),
//         })
//       })
//       return intentDetails
//     })
//     .then(intentDetails => predict(intentDetails))
//     .then(predictions => {
//       // Save predictions
//       fs.writeFile(
//         `./predictions_${start}-${end}.json`,
//         JSON.stringify(predictions),
//         err => {
//           if (err) throw err
//           console.log('Saved!')
//         }
//       )
//     })
// }

// performQuery(start, end, intent)
