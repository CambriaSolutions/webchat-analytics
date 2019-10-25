require('dotenv').config()
const fs = require('fs')
const csvFilePath = './mdhs-csa-training-v1.csv'
const csv = require('csvtojson')

csv()
  .fromFile(csvFilePath)
  .then(jsonObj => {
    return jsonObj
  })
  .then(obj => {
    let smLabeling = ''
    for (const line of obj) {
      if (line.category === 'undefined') {
        smLabeling === ''
          ? (smLabeling += `${line.phrase}, unhandled`)
          : (smLabeling += `\n${line.phrase}, unhandled`)
      } else {
        smLabeling === ''
          ? (smLabeling += `${line.phrase}, child-support`)
          : (smLabeling += `\n${line.phrase}, child-support`)
      }
    }
    return smLabeling
  })
  .then(async smLabeling => {
    await fs.writeFile(`./smLabeling.csv`, smLabeling, async err => {
      if (err) throw err
    })
  })
