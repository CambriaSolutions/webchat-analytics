const fs = require('fs')
const { Parser } = require('json2csv')
const aggregate = require('../predictions/predictionAggregate_09-01-10-01.json')

// Create a csv from the aggregate
const fields = ['occurences', 'queries', 'contexts.name', 'contexts.count']
for (const label in aggregate) {
  const json2csvParser = new Parser({ fields, unwind: ['queries', 'contexts'] })
  const csv = json2csvParser.parse(aggregate[label])

  // Save user says details
  fs.writeFile(`./testFiles/${label}.csv`, csv, err => {
    if (err) throw err
    console.log(`./testFiles/${label}.csv saved!`)
  })
}
