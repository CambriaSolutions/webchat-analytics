const fs = require('fs')

// file = './unhandledQueries 5-4-2020.csv'

exports.getQueriesFromFile = (file) => {
  fs.readFile(file, { encoding: 'utf8' }, async (err, data) => {
    const queries = data.split('\n')

    console.log('getCategoriesFromFile finished')

    return queries
  })
}

// File = './unhandledQueriesCategorized 5-4-2020.csv'
exports.writeMappedQueriesToFile = (file, mappedQueries) => {
  let mappedQueriesCSVString = ''

  // Wrapping in double quotes so commas in the string don't break the csv format
  mappedQueries.forEach(x => {
    mappedQueriesCSVString += `"${mappedQueriesCSVString.queryText}","${mappedQueriesCSVString.mappedValue}"\n`
  })

  const f1 = fs.openSync(file, 'w')

  const f2 = fs.writeSync(f1, mappedQueriesCSVString)

  fs.close(f2, async () => {
    console.log('writeMappedQueriesToFile finished')
  })
}