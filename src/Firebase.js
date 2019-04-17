import firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
}
firebase.initializeApp(config)

const db = firebase.firestore()

/*const format = require('date-fns/format')

const currDate = new Date()
currDate.setHours(18)

console.log(firebase.firestore.Timestamp.now())
console.log(firebase.firestore.Timestamp.fromDate(new Date()).toDate())
console.log(firebase.firestore.Timestamp.fromDate(currDate).toDate())

console.log(new Date(firebase.firestore.Timestamp.now().toDate()))

const dateKey = format(currDate, 'MM-DD-YYYY')
console.log(dateKey)
const dateKeyTest = '03-30-2019'

const metricsRef = db.collection('metrics-test').doc(dateKey)

metricsRef.get().then(doc => {
  if (doc.exists) {
    console.log('EXISTS')
    metricsRef.update({
      date: new Date(),
    })
  } else {
    console.log('NOT EXISTS')
    metricsRef.set({
      date: firebase.firestore.Timestamp.fromDate(currDate),
      intents: [
        {
          sessions: 1,
        },
      ],
    })
  }
})*/

export default db
