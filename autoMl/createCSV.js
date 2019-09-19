const fs = require('fs')
const intentData = require('./fallbackQueries_07-01_08-01')

const createCSV = intentData => {
  let data = ''
  intentData.forEach((line, i) => {
    const cleanLine = line.replace(/,/g, '').trim()
    i === 0 ? (data += cleanLine) : (data += `,\n${cleanLine}`)
  })

  // Save user says details
  fs.writeFile(`./fallbackQueries_07-01_08-01_CSV.csv`, data, err => {
    if (err) throw err
    console.log('Saved!')
  })
}

createCSV(intentData)
