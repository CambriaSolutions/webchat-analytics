require('dotenv').config()
const admin = require('firebase-admin')
const { format } = require('date-fns')
const fs = require('fs')
const serviceAccount = require('./analyticsKey.json')
const queries = require('./dataFiles/fallbackFullDetails_08-01_09-01')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
})

// Regex to retrieve text after last "/" on a path
const getIdFromPath = path => /[^/]*$/.exec(path)[0]

const db = admin.firestore()
const start = new Date(
  'Sept 11 2019  00:00:00 GMT-0700 (Pacific Daylight Time)'
)
const end = new Date('Sept 13 2019 00:00:00 GMT-0700 (Pacific Daylight Time)')

const intent = {
  name: 'Default Fallback Intent',
  id: 'd832e961-7c6c-4b00-a608-88a5c1c3f3f5',
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
      let intentQueries = []
      querySnapshot.forEach(doc => {
        let tempData = doc.data()
        intentDetails.push({
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
          createdAt: format(tempData.createdAt.toDate(), 'MM-DD-YYYY'),
        })
        intentQueries.push(tempData.queryResult.queryText)
      })
      return (intentData = { intentDetails, intentQueries })
    })
    .then(intentData => {
      const startDate = format(start, 'MM-DD')
      const endDate = format(end, 'MM-DD')

      // Save full intent data
      fs.writeFile(
        `./dataFiles/fallbackFullDetails_${startDate}_${endDate}.json`,
        JSON.stringify(intentData.intentDetails),
        err => {
          if (err) throw err
          console.log('Saved!')
        }
      )
      // Save user says details
      fs.writeFile(
        `./dataFiles/fallbackQueries_${startDate}_${endDate}.json`,
        JSON.stringify(intentData.intentQueries),
        err => {
          if (err) throw err
          console.log('Saved!')
        }
      )

      let data = ''
      intentData.intentQueries.forEach((line, i) => {
        const cleanLine = line.replace(/,/g, '').trim()
        i === 0 ? (data += cleanLine) : (data += `,\n${cleanLine}`)
      })

      // Save user says details
      fs.writeFile(
        `./dataFiles/queries_${startDate}_${endDate}.csv`,
        data,
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

performQuery(start, end, intent)
