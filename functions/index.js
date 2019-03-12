const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.storeAnalytics = functions.https.onRequest((req, res) => {
  const data = req.data
  if (!data) {
    res.send(500, 'The "data" parameter is required')
  }

  const store = admin.firestore()
  return store
    .collection('requests')
    .add(data)
    .then(docRef => {
      return res.status(200).send(`Request data written with ID: ${docRef.id}`)
    })
    .catch(error => {
      res.send(500, `Error storing data: ${error}`)
    })
})
