require('dotenv').config()
const fs = require('fs')
const automl = require('@google-cloud/automl')
const client = new automl.v1beta1.PredictionServiceClient({})
const intentDetails = require('./dataFiles_raw/fallbackFullDetails_09-01_10-01.json')

const formattedName = client.modelPath(
  process.env.AUTOML_PROJECT,
  process.env.AUTOML_LOCATION,
  process.env.AUTOML_MODEL
)

const promisePredict = query => {
  const payload = {
    textSnippet: {
      content: query,
      mime_type: 'text/plain',
    },
  }
  const request = {
    name: formattedName,
    payload: payload,
    params: { thing: 'thing' },
  }

  return client.predict(request)
}

const performMLQuery = async intentDetails => {
  const queriesToSkip = ['i acknowledge', 'no', 'yes']
  const predictionPromises = intentDetails.map((query, i) => {
    if (i > 10) {
      return
    }
    const shouldSkipQuery = queriesToSkip.includes(
      query.messageText.toLowerCase()
    )

    if (!shouldSkipQuery) {
      const prediction = promisePredict(query.messageText)
      return prediction
    }
  })

  const responses = await Promise.all(predictionPromises)
  responses.forEach(response => {
    if (response) {
      console.log(response)
      console.log(response[0].payload[0])
    }
  })
  return responses
}

const bigData = performMLQuery(intentDetails)
