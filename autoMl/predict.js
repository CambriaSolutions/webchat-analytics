require('dotenv').config()
const fs = require('fs')
const automl = require('@google-cloud/automl')
const client = new automl.v1beta1.PredictionServiceClient({})
// const queries = require('./dataFiles_raw/fallbackQueries_09-01_09-22')

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
  let predictionsWithQuery = []
  for (const query of intentDetails) {
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
    const topThree = {
      first: responses[0].payload[0],
      second: responses[0].payload[1],
      third: responses[0].payload[2],
    }
    predictionsWithQuery.push({
      query: payload.textSnippet.content,
      topThree,
    })
  }
  // Aggregate the number of times the category showed up
  // let predictionAggregate = {}
  // if (predictionAggregate[query.messageText]) {
  //   predictionAggregate[mesquery.messageText].occurences += 1
  // } else {
  //   predictionAggregate[query.messageText].occurences = 1
  // }

  return (predictions = { predictionsWithQuery, predictionAggregate })
}

const performQuery = (start, end, intent) => {
  db.collection(`projects/${process.env.FIREBASE_PROJECT_ID}/requests`)
    .where('createdAt', '>', start)
    .where('createdAt', '<', end)
    .where('intentId', '==', intent.id)
    .orderBy('createdAt', 'desc')
    .get()
    .then(querySnapshot => {
      let intentDetails = []
      querySnapshot.forEach(doc => {
        let tempData = doc.data()
        intentDetails.push({
          // Save the detection of confidence
          intentDetectionConfidence:
            tempData.queryResult.intentDetectionConfidence,
          // Save the actual text
          messageText: tempData.queryResult.queryText,
          // Save the output context
          outputContexts: tempData.queryResult.outputContexts
            ? tempData.queryResult.outputContexts.map(o => ({
                ...o,
                context: getIdFromPath(o.name),
              }))
            : [],
          // Save the conversation Id in case we want to investigate
          conversationId: getIdFromPath(tempData.session),
          // Save when the conversation is created
          createdAt: format(tempData.createdAt.toDate(), 'MM-DD-YYYY'),
        })
      })
      return intentDetails
    })
    .then(intentDetails => predict(intentDetails))
    .then(predictions => {
      // Save predictions
      fs.writeFile(
        `./predictions_${start}-${end}.json`,
        JSON.stringify(predictions),
        err => {
          if (err) throw err
          console.log('Saved!')
        }
      )
    })
}

performQuery(start, end, intent)
