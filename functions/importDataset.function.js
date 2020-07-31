require('dotenv').config()
const admin = require('firebase-admin')
const functions = require('firebase-functions')
const fs = require('fs')
const path = require('path')
const os = require('os')
const { Storage } = require('@google-cloud/storage')
const format = require('date-fns/format')
const automl = require('@google-cloud/automl')

const store = admin.firestore()

// Google Cloud Storage Setup
const storage = new Storage({
  projectId: process.env.AUTOML_MDHS_PROJECT_ID,
  keyFilename: './mdhs-key.json'
})

const client = new automl.v1beta1.AutoMlClient({
  projectId: process.env.AUTOML_MDHS_PROJECT_ID,
  keyFilename: './mdhs-key.json'
})

/***
 * Retrieve new query and category pairs if occurrences >10
 * and import dataset into category model
 */
async function main(subjectMatter) {
  console.log('retrieving query data...')

  const storeRef = store.collection(
    `/subjectMatters/${subjectMatter}/queriesForTraining`
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
      console.log('File beginning to write in GS bucket')

      const date = format(new Date(), 'MM-DD-YYYY')
      const fileName = `${date}-${subjectMatter}-category-training.csv`
      const tempFilePath = path.join(os.tmpdir(), fileName)
      let f = fs.openSync(tempFilePath, 'w')

      phraseCategory.forEach((element) => {
        fs.writeSync(f, `"${element.phrase}","${element.category}"\n`)
      })

      fs.closeSync(f)

      console.log('Uploading file to GS bucket')
      // Uploads csv file to bucket for AutoML dataset import

      const bucket = storage.bucket('gs://' + process.env.MDHS_GCS_URI)

      console.log('GS bucket instantiated')
      console.log('tempFilePath: ' + tempFilePath)
      console.log('fileName: ' + fileName)

      const [file, requestResponse] = await bucket.upload(
        tempFilePath,
        {
          destination: bucket.file(fileName)
        }
      )

      // TODO better way to check for fail/success here
      if (!file) {
        console.error('Error upload file to GS bucket. requestResponse: ' + JSON.stringify(requestResponse))
      } else {
        console.log('File uploaded successfully. phraseCategory[]: ' + JSON.stringify(phraseCategory))

        // import phrases and categories to AutoML category dataset
        await updateCategoryModel(fileName, phraseCategory, subjectMatter)
      }
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
async function updateCategoryModel(fileName, phraseCategory, subjectMatter) {
  const datasetPath = client.datasetPath(
    process.env.AUTOML_MDHS_PROJECT_ID,
    process.env.AUTOML_LOCATION,
    process.env.AUTOML_MDHS_DATASET_ID
  )

  try {
    console.log('Beginning updateCategoryModel')

    // Get Google Cloud Storage URI
    const inputConfig = {
      gcsSource: {
        inputUris: [`gs://${process.env.MDHS_GCS_URI}/${fileName}`],
      },
    }

    // Build AutoML request object
    const request = {
      name: datasetPath,
      inputConfig: inputConfig,
    }

    console.log(`Processing Category dataset import`)
    console.log('datasetPath: ' + JSON.stringify(datasetPath))
    console.log('inputConfig: ' + JSON.stringify(inputConfig))
    console.log('request: ' + JSON.stringify(request))

    // Import dataset from input config
    const [operation] = await client.importData(request)

    console.log(`Finished Category dataset import`)

    await store
      .collection(`/subjectMatters/`)
      .doc(subjectMatter)
      .update({
        isImportProcessing: true,
      })

    const [operationResponses] = await operation.promise()

    // The final result of the operation.
    if (operationResponses) {
      console.log(`Operation Response Below:`)
      console.log(operationResponses)

      // Save import status in db
      await store
        .collection(`/subjectMatters/`)
        .doc(subjectMatter)
        .update({
          isImportProcessing: false,
          lastImported: admin.firestore.Timestamp.now(),
        })

      // Update import status in individual queries
      return Promise.all(
        phraseCategory.map(async (element) => {
          await store
            .collection(
              `/subjectMatters/${subjectMatter}/queriesForTraining/`
            )
            .doc(element.docId)
            .update({ categoryModelImported: true })
        })
      )
    }
  } catch (err) {
    console.error('updateCategoryModel failed: ' + err)

    // Save import status in db
    await store
      .collection(`/subjectMatters/`)
      .doc(`${subjectMatter}`)
      .update({
        isImportProcessing: false,
      })
  }
}

exports = module.exports = functions
  .runWith({
    // TODO this does not seem to be working as intended
    timeoutSeconds: 540
  })
  .pubsub
  .schedule('0 20 * * *')
  .timeZone('America/Los_Angeles')
  .onRun(async (context) => {
    const subjectMatters = ['cse']

    //for (const subjectMatterIndex in subjectMatters) {
    const subjectMatter = subjectMatters[0]

    try {
      await main(subjectMatter)
    } catch (err) {
      console.log(err)
    }
    //}
  })