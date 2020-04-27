require('dotenv').config()
const admin = require('firebase-admin')
const automl = require('@google-cloud/automl')
const functions = require('firebase-functions')
const fs = require('fs')
const path = require('path')
const os = require('os')
const { Storage } = require('@google-cloud/storage')
const format = require('date-fns/format')

const store = admin.firestore()

// Google Cloud Storage Setup
const storage = new Storage()

//Instantiate autoML client
const client = new automl.v1beta1.AutoMlClient()

/***
 * Retrieve new query and category pairs if occurrences >10
 * and import dataset into category model
 */
async function main() {
  console.log('retrieving query data...')
  const storeRef = store.collection(
    `/projects/${process.env.AGENT_PROJECT}/queriesForTraining`
  )
  const queriesToImport = await storeRef
    .where('occurrences', '>=', 10)
    .where('categoryModelTrained', '==', false)
    .where('smModelTrained', '==', false)
    .get()
  const phraseCategory = []
  // add new phrase category pairs to phraseCategory array
  for (let query of queriesToImport.docs) {
    let queryDoc = query.data()
    const docId = query.id
    const category = queryDoc.category
    const phrase = queryDoc.phrase
    phraseCategory.push({ phrase, category, docId })
  }

  if (phraseCategory.length > 0) {
    try {
      const date = format(new Date(), 'MM-DD-YYYY')
      const fileName = `${date}-category-training.csv`
      const tempFilePath = path.join(os.tmpdir(), fileName)
      let f = fs.openSync(tempFilePath, 'w')
      phraseCategory.forEach((element) => {
        fs.writeSync(f, `${element.phrase}, ${element.category} \n`)
      })
      fs.close(f, async () => {
        console.log('File completed writing in GS bucket')
        // Uploads csv file to bucket for AutoML dataset import

        const bucket = storage.bucket('gs://' + process.env.GCS_URI)
        const results = await bucket.upload(
          tempFilePath,
          {
            destination: bucket.file(fileName),
          },
          async (err, file) => {
            if (err) {
              return console.log(err)
            }
            console.log('File uploaded successfully', phraseCategory)
            // import phrases and categories to AutoML category dataset
            await updateCategoryModel(fileName, phraseCategory)
          }
        )
      })
    } catch (err) {
      console.error(err)
    }
  } else {
    console.log('No new data to import.')
  }
}

/**
 * Import dataset into AutoML Category Model
 * @param {*} fileName
 * @param {*} phraseCategory
 */
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
        inputUris: [`gs://${process.env.GCS_URI}/${fileName}`],
      },
    }
    // Build AutoML request object
    const request = {
      name: datasetFullId,
      inputConfig: inputConfig,
    }

    // Import dataset from input config
    const [operation] = await client.importData(request)

    console.log(`Processing Category dataset import...`)

    await store
      .collection(`/projects/`)
      .doc(`${process.env.AGENT_PROJECT}`)
      .update({
        isImportProcessing: true,
      })

    const [operationResponses] = await operation.promise()

    // The final result of the operation.
    if (operationResponses) {
      console.log(operationResponses)
      console.log(`Data imported.`)
      // Save import status in db
      await store
        .collection(`/projects/`)
        .doc(`${process.env.AGENT_PROJECT}`)
        .update({
          isImportProcessing: false,
          lastImported: admin.firestore.Timestamp.now(),
        })
      // Update import status in individual queries
      return Promise.all(
        phraseCategory.map(async (element) => {
          await store
            .collection(
              `/projects/${process.env.AGENT_PROJECT}/queriesForTraining/`
            )
            .doc(element.docId)
            .update({ categoryModelImported: true })
        })
      )
    }
  } catch (err) {
    // Save import status in db
    await store
      .collection(`/projects/`)
      .doc(`${process.env.AGENT_PROJECT}`)
      .update({
        isImportProcessing: false,
      })
    console.error(err)
  }
}

exports = module.exports = functions.pubsub.schedule('0 0 * * *').onRun(async (context) => {
  try {
    await main()
  } catch (err) {
    console.log(err)
  }
})