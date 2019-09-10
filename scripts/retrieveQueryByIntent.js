require('dotenv').config()
const admin = require('firebase-admin')
const format = require('date-fns/format')
const parse = require('date-fns/parse')
const fs = require('fs')

const serviceAccount = require('./analyticsKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
})

// Regex to retrieve text after last "/" on a path
const getIdFromPath = path => /[^/]*$/.exec(path)[0]

const db = admin.firestore()
const start = new Date('Aug 27 2019 00:00:00 GMT-0700 (Pacific Daylight Time)')
const end = new Date('Aug 28 2019 00:00:00 GMT-0700 (Pacific Daylight Time)')
const intentName = 'Default Fallback Intent'

const performQuery = (start, end, intentName) => {
  db.collection(`projects/${process.env.FIREBASE_PROJECT_ID}/requests`)
    .where('createdAt', '>', start)
    .where('createdAt', '<', end)
    .where('intentId', '==', intentName)
    .orderBy('createdAt', 'desc')
    .get()
    .then(querySnapshot => {
      let intentDetails = []
      querySnapshot.forEach(doc => {
        let tempData = doc.data()
        console.log(tempData)
        intentDetails.push({
          createdAt: tempData.createdAt.toDate(),
          intentId: intent.id,
          intentName: tempData.queryResult.intent.displayName,
          intentDetectionConfidence:
            tempData.queryResult.intentDetectionConfidence,
          messageText: tempData.queryResult.queryText,
          outputContexts: tempData.queryResult.outputContexts
            ? tempData.queryResult.outputContexts.map(o => ({
                ...o,
                context: getIdFromPath(o.name),
              }))
            : [],
          conversationId: getIdFromPath(tempData.session),
          botResponse: tempData.queryResult.fulfillmentText,
        })
      })
      return intentDetails
    })
    .then(intentDetails => {
      // Save intents
      fs.writeFile(
        `./${intentName}.json`,
        JSON.stringify(intentDetails),
        err => {
          if (err) throw err
          console.log('Saved!')
        }
      )
    })
    .catch(err => {
      console.log(err)
    })
}

performQuery(start, end, intentName)
