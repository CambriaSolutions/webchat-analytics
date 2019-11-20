const functions = require('firebase-functions')
const cors = require('cors')({ origin: true })

// Google Cloud Storage Setup
const { Storage } = require('@google-cloud/storage')
const storage = new Storage({
  projectId: process.env.GCS_PROJECT_ID,
  credentials: {
    private_key: process.env.GCS_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.GCS_CLIENT_EMAIL,
  },
})
const bucketName = 'daily-json-exports'

// Calculate metrics based on requests
exports = module.exports = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const reqData = req.body
    if (!reqData) {
      res.send(500, "The request body doesn't contain expected parameters")
    }

    // Check that filename exists on the request
    if (!reqData.filename) {
      res.send(500, 'Missing file parameters')
    }

    const filename = reqData.filename
    const bucket = storage.bucket(bucketName)
    let file = bucket.file(filename)

    file
      .exists()
      .then(data => {
        var exists = data[0]
        if (exists) {
          res.setHeader(
            'Content-disposition',
            'attachment; filename=' + filename
          )
          res.setHeader('Content-type', 'application/json')

          const readStream = file.createReadStream()
          return readStream.pipe(res)
        } else {
          return res.send(204, "The requested file doesn't exist")
        }
      })
      .catch(err => {
        res.send(404, "The requested file doesn't exist")
        return err
      })
  })
})
