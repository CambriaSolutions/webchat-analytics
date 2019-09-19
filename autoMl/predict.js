require('dotenv').config()
const automl = require('@google-cloud/automl')
const client = new automl.v1beta1.PredictionServiceClient({})

const formattedName = client.modelPath(
  process.env.AUTOML_PROJECT,
  process.env.AUTOML_LOCATION,
  process.env.AUTOML_MODEL
)

const payload = {
  textSnippet: {
    content:
      'I have not received child support for my children yet. Their father has told me that child support was taken out of his check twice but I have not received it thru the card.',
    mime_type: 'text/plain',
  },
}
const request = {
  name: formattedName,
  payload: payload,
}
client
  .predict(request)
  .then(responses => {
    const response = responses[0]
    const top3 = {
      first: response.payload[0],
      second: response.payload[1],
      third: response.payload[2],
    }
    console.log(payload.textSnippet.content)
    console.log(top3)
  })
  .catch(err => {
    console.error(err)
  })
