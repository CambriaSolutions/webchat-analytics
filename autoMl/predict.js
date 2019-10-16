require('dotenv').config()
const fs = require('fs')
const automl = require('@google-cloud/automl')
const client = new automl.v1beta1.PredictionServiceClient({})

// // Helpers
// const formatContexts = require('./helpers/formatContexts')
// const createExcelForReport = require('./helpers/createExcelForReport')

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
const start = new Date('Sept 1 2019  00:00:00 GMT-0700 (Pacific Daylight Time)')
const end = new Date('Oct 1 2019 00:00:00 GMT-0700 (Pacific Daylight Time)')

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

          // Increment count of context if, if it is present
          if (contexts) {
            contexts.forEach((currentContext, i) => {
              const contextExists = predictionAggregate[
                topCategory.displayName
              ].contexts.filter(e => {
                return e.name === currentContext
              })
              if (contextExists.length > 0) {
                contextExists[0].count++
              } else {
                predictionAggregate[topCategory.displayName].contexts.push({
                  name: currentContext,
                  count: 1,
                })
              }
            })
          }
        } else {
          const currentContexts = contexts.map(context => {
            return { name: context, count: 1 }
          })
          predictionAggregate[topCategory.displayName] = {
            occurences: 1,
            queries: [query.messageText],
            contexts: currentContexts,
          }
        }
      }
    }
  }

  // Sort the contexts by occurrences
  let contextsToSort = []

  // Sort the predictions by occurrences
  let sortable = []
  // Save predictions
  for (const prediction in predictionAggregate) {
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

  fs.writeFile(
    `./predictions/predictionAggregate_${format(start, 'MM-DD')}-${format(
      end,
      'MM-DD'
    )}.json`,
    JSON.stringify(sortedAggregate),
    err => {
      if (err) throw err
      console.log('Saved!')
    }
  )
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
    .then(intentDetails => {
      // Save full intent data
      fs.writeFile(
        `./dataFiles_raw/fallbackFullDetails_${format(start, 'MM-DD')}-${format(
          end,
          'MM-DD'
        )}.json`,
        JSON.stringify(intentDetails),
        err => {
          if (err) throw err
          console.log('Saved!')
        }
      )
      predict(intentDetails)
    })
    // .then(() => {
    //   console.log(`${format(start, 'MM-DD')}-${format(end, 'MM-DD')}`)
    //   formatContexts(`${format(start, 'MM-DD')}-${format(end, 'MM-DD')}`)
    // })
    // .then(() => {
    //   createExcelForReport(`${format(start, 'MM-DD')}-${format(end, 'MM-DD')}`)
    // })
    .catch(err => console.log(err))
}

performQuery(start, end, intent)
