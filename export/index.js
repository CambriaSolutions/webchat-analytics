const admin = require('firebase-admin')
const fs = require('fs')
const path = require('path')
const os = require('os')

const { Storage } = require('@google-cloud/storage')
// Creates a client
const storage = new Storage()
const bucketName = 'daily-json-exports'

// Date FNS imports
const format = require('date-fns/format')
const startOfDay = require('date-fns/start_of_day')
const endOfDay = require('date-fns/end_of_day')
const subDays = require('date-fns/sub_days')

admin.initializeApp()

const today = subDays(new Date(), 1)
const startTime = startOfDay(today)
const endTime = endOfDay(today)
var db = admin.firestore()

// We keep several data points that are only needed to calculate the current day's metrics.
// 1. An array of conversations inside of each intent counter
// 2. An array of conversations that contain support requests
// 3. A collection of conversationIds needed to update the exit intent per conversation
// In order to keep our queries efficient, we delete the day's unneeded metrics.

const cleanUpMetrics = async (context) => {
  console.log(`New Date() = ${format(new Date(), 'MM-DD-YYYY')}`)
  console.log(`Today: ${today}`)
  console.log(`startTime: ${startTime}`)

  // The metric's id is a formatted day
  const metricName = format(today, 'MM-DD-YYYY')

  // Create a reference to the previous days metrics
  const metricsRef = db
    .collection(`${context}/metrics`)
    .doc(metricName)

  // Retrieve and parse the day's metrics
  const doc = await metricsRef.get()
  const data = await doc.data()

  // Retrieve the intents and delete the conversations arrays
  data.intents.map(intent => {
    delete intent.conversations
  })

  // Update the metrics for the previous day
  metricsRef.update({
    intents: data.intents,
    conversationsWithSupportRequests: admin.firestore.FieldValue.delete(), // This deletes the conversations with support requests
    dailyExitIntents: admin.firestore.FieldValue.delete(), // This deletes the daily exit intents collection
  })
  console.log(`metrics successfully cleaned for ${context + '/metrics/' + metricName}`)
}

const uploadToBucket = (filename, subjectMatter) => {
  // Uploads a local file to the bucket
  const bucket = storage.bucket(bucketName)
  const jsonExportName = subjectMatter + '-' + format(today, 'MM-DD-YYYY')
  bucket.upload(
    filename,
    {
      destination: bucket.file(`${jsonExportName}.json`),
    },
    (err) => {
      if (err) {
        return console.log(err)
      }
      console.log('Uploaded successfully')
    }
  )
  console.log(`${jsonExportName} uploaded to ${bucketName}.`)
}

const retrieveData = async (context, subjectMatter) => {
  const aggregateRef = db.collection(
    `${context}/aggregate`
  )
  const activeRef = await aggregateRef
    .where('createdAt', '>', startTime)
    .where('createdAt', '<', endTime)
    .get()

  const conversationsCount = activeRef.docs.length
  let conversationsIdx = 1
  if (conversationsCount > 0) {
    // Write collection to JSON file
    const fileName = subjectMatter + '-firestore-export.json'
    const tempFilePath = path.join(os.tmpdir(), fileName) // `./${fileName}`
    let f = fs.openSync(tempFilePath, 'w')
    fs.writeSync(f, '{"conversations": [')

    for (let conversation of activeRef.docs) {
      let conversationDoc = conversation.data()

      let tempStr =
        JSON.stringify(conversationDoc).slice(0, -1) + ',"requests": ['
      fs.writeSync(f, tempStr)

      const requestsRef = await aggregateRef
        .doc(conversation.id)
        .collection('requests')
        .get()

      const requestsCount = requestsRef.docs.length
      let requestsIdx = 1
      for (let request of requestsRef.docs) {
        const requestDoc = request.data()

        tempStr =
          JSON.stringify(requestDoc) + (requestsIdx < requestsCount ? ',' : '')
        fs.writeSync(f, tempStr)

        requestsIdx++
      }

      fs.writeSync(f, ']}' + (conversationsIdx < conversationsCount ? ',' : ''))
      conversationsIdx++
    }

    fs.writeSync(f, ']}')

    fs.close(f, function () {
      console.log('File completed')
      uploadToBucket(tempFilePath)
    })
  }
}

exports.handler = async (subjectMatter, callback) => {
  const context = 'subjectMatters/' + subjectMatter
  // Retrieve today's data from Firestore
  try {
    await retrieveData(context, subjectMatter)
    await cleanUpMetrics(context)
    callback(null, 'Success!');
  } catch (err) {
    callback(err, 'Error retrieving data');
  }
}
