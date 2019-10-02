require('dotenv').config()
const fs = require('fs')
const fetch = require('node-fetch')
const { Storage } = require('@google-cloud/storage')
// This is downloaded from the exported location in GCP
// add "type, location, category" to the top of the csv, for categories
const csvFilePath = './TCN2145074751173162497_export_201910011422_export.csv'
const csv = require('csvtojson')

// Creates a client
const storage = new Storage()

const bucketName = 'webchat-analytics-lcm'

async function generateDataFromSignedUrl(bucketName) {
  // These options will allow temporary read access to the file
  const options = {
    version: 'v2', // defaults to 'v2' if missing.
    action: 'read',
    expires: Date.now() + 1000 * 60 * 60, // one hour
  }

  let data
  await csv()
    .fromFile(csvFilePath)
    .then(jsonObj => {
      data = jsonObj
    })

  let parsedData = []
  for (const query of data) {
    const location = query.location
    const filename = location.replace('gs://webchat-analytics-lcm', '')

    const [url] = await storage
      .bucket(bucketName)
      .file(filename)
      .getSignedUrl(options)

    let queryText
    await fetch(url)
      .then(res => res.text())
      .then(body => (queryText = body))

    parsedData.push({ queryText, training: query.category })
  }

  let csvString = ''
  parsedData.forEach((line, i) => {
    console.log(line)
    i === 0
      ? (csvString += `${line.queryText}, ${line.training}`)
      : (csvString += `\n${line.queryText}, ${line.training}`)
  })

  // Save user says details
  fs.writeFile(`./training.csv`, csvString, err => {
    if (err) throw err
    console.log('Saved!')
  })
}

generateDataFromSignedUrl(bucketName)
