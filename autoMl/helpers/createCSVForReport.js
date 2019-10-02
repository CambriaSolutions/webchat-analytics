const fs = require('fs')
const { Parser } = require('json2csv')
const aggregate = require('../predictions/predictionAggregate_06-01-10-01.json')

const createCSV = async () => {
  // Create a csv from the aggregate
  const fields = ['occurences', 'queries', 'contexts.name', 'contexts.count']
  let superString = ''

  const reg = new RegExp(
    `"occurences","queries","contexts.name","contexts.count"`,
    'g'
  )

  for (const label in aggregate) {
    const json2csvParser = new Parser({
      fields,
      unwind: ['queries', 'contexts'],
    })
    const csvData = json2csvParser.parse(aggregate[label])

    superString === ''
      ? (superString += `${csvData}`)
      : (superString += `\n\n${label}${csvData.replace(reg, '')}`)
  }
  await fs.writeFile(`./testFiles/Aggregate.csv`, superString, async err => {
    if (err) throw err
  })
}

createCSV()
