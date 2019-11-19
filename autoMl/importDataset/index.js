require('dotenv').config()
const admin = require('firebase-admin')
const automl = require('@google-cloud/automl')
const fs = require('fs')
const path = require('path')
const os = require('os')
const { Storage } = require('@google-cloud/storage')
const format = require('date-fns/format')

const serviceAccount = require('./keys/analyticsKey-dev.json.js')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})
const store = admin.firestore()

// Google Cloud Storage Setup
const storage = new Storage({
  keyFilename: './keys/analyticsKey-dev.json',
})

//Instantiate autoML client
const client = new automl.v1beta1.AutoMlClient({
  // optional auth parameters
  client_email: `${process.env.AUTOML_CLIENT_EMAIL}`,
  private_key: `${process.env.AUTOML_PRIVATE_KEY.replace(/\\n/g, '\n')}`,
})

async function main() {
  console.log('retrieving data...')
  const storeRef = store.collection(
    `/projects/${process.env.AGENT_PROJECT}/queriesForTraining`
  )
  const activeRef = await storeRef
    .where('occurrences', '>=', 10)
    .where('categoryModelTrained', '==', false)
    .where('smModelTrained', '==', false)
    .get()

  console.log('retrieved category phrase data')
  const phraseCategory = []
  for (let query of activeRef.docs) {
    let queryDoc = query.data()
    const docId = query.id
    const category = queryDoc.category
    const phrase = queryDoc.phrase
    phraseCategory.push({ phrase, category, docId })
  }

  try {
    const date = format(new Date(), 'MM-dd-yyyy')
    const fileName = `${date}-category-training.csv`
    const tempFilePath = path.join(os.tmpdir(), fileName)
    let f = fs.openSync(tempFilePath, 'w')
    phraseCategory.map(function(element) {
      fs.writeSync(f, `${element.phrase}, ${element.category} \n`)
    })
    fs.close(f, async function() {
      console.log('File completed writing')
      // Uploads csv file to bucket
      const bucket = storage.bucket('gs://webchat-analytics-dev.appspot.com/')

      const results = await bucket.upload(
        tempFilePath,
        {
          destination: bucket.file(fileName),
        },
        async (err, file) => {
          if (err) {
            return console.log(err)
          }
          console.log('Uploaded successfully', phraseCategory)
          // import phrases and categories to category dataset
          await updateCategoryModel(fileName, phraseCategory)
        }
      )
    })
  } catch (err) {
    console.error(err)
  }
}

async function updateCategoryModel(fileName, phraseCategory) {
  const datasetFullId = client.datasetPath(
    process.env.AUTOML_PROJECT,
    process.env.AUTOML_LOCATION,
    process.env.AUTOML_DATASET
  )
  try {
    // Get Google Cloud Storage URI
    const inputConfig = {
      gcsSource: {
        inputUris: [`gs://webchat-analytics-dev.appspot.com/${fileName}`],
      },
    }
    // Import the dataset from input config
    client
      .importData({ name: datasetFullId, inputConfig: inputConfig })
      .then(responses => {
        console.log('responses', responses)
        const operation = responses[0]
        console.log(`Processing import...`)
        return operation.promise()
      })
      .then(async responses => {
        // The final result of the operation.
        const operationDetails = responses[2]

        console.log(`\t\tName: ${operationDetails.name}`)
        console.log(`\t\tDone: ${operationDetails.done}`)

        return Promise.all(
          phraseCategory.map(async function(element) {
            await store
              .collection(
                `/projects/${process.env.AGENT_PROJECT}/queriesForTraining/`
              )
              .doc(element.docId)
              .update({ categoryModelTrained: true })
          })
        )
      })
      .catch(err => {
        console.error(err)
      })
  } catch (err) {
    console.error(err)
  }
}
exports.trainModels = async (event, context, callback) => {
  try {
    await main()
    callback(null, 'Success!')
  } catch (err) {
    callback(err, 'Error retrieving data')
  }
}
