require('dotenv').config()
const fs = require('fs')
const automl = require('@google-cloud/automl')
const client = new automl.v1beta1.PredictionServiceClient({})
const queries = require('./dataFiles_raw/fallbackQueries_09-01_09-22')

const formattedName = client.modelPath(
  process.env.AUTOML_PROJECT,
  process.env.AUTOML_LOCATION,
  process.env.AUTOML_MODEL
)

const predict = async queries => {
  let predictions = []
  for (const query of queries) {
    const payload = {
      textSnippet: {
        content: query,
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
      // second: responses[0].payload[1],
      // third: responses[0].payload[2],
    }
    predictions.push({
      query: payload.textSnippet.content,
      topThree,
    })
  }
  return predictions
}

predict(queries).then(predictions => {
  // Save predictions
  fs.writeFile(
    `./predictions_9-1-9-20.json`,
    JSON.stringify(predictions),
    err => {
      if (err) throw err
      console.log('Saved!')
    }
  )
})
