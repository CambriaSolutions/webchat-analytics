const Excel = require('exceljs')
const workbook = new Excel.Workbook()
const aggregate = require('../predictions/predictionAggregate_06-01-10-01.json')

for (const key in aggregate) {
  workbook.addWorksheet(key)
  const currentSheet = workbook.getWorksheet(key)
  currentSheet.columns = [
    { header: 'occurences', key: 'occurences', width: 10 },
    { header: 'queries', key: 'queries', width: 32 },
    { header: 'Context Name', key: 'contextsName' },
    { header: 'Context Count', key: 'contextsCount' },
  ]

  // Add occurences
  currentSheet.addRow({
    occurences: aggregate[key].occurences,
  })

  // Add queries
  aggregate[key].queries.forEach(query => {
    currentSheet.addRow({
      queries: query,
    })
  })

  // Add contexts
  aggregate[key].contexts.forEach(context => {
    currentSheet.addRow({
      contextsName: context.name,
      contextsCount: context.count,
    })
  })
}

workbook.xlsx.writeFile('./filename.xlsx')
