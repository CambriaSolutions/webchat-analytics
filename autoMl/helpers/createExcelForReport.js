const Excel = require('exceljs')
const workbook = new Excel.Workbook()
const aggregate = require('../predictions/predictionAggregate_06-01-07-01.json')

const cellDictionary = {
  category: 'A',
  occurences: 'B',
  queries: 'C',
  contextsName: 'D',
  contextsCount: 'E',
}

const createAndFormatHeaders = (sheet, sheetName) => {
  const currentSheet = workbook.getWorksheet(sheetName)

  // Add filter button to headers
  currentSheet.autoFilter = 'A1:E1'

  // Create columns
  currentSheet.columns = [
    {
      header: 'Category',
      key: 'category',
      width: 20,
      style: {
        alignment: {
          vertical: 'middle',
          horizontal: 'center',
        },
      },
    },
    {
      header: 'Occurences',
      key: 'occurences',
      width: 12,
      style: {
        alignment: {
          vertical: 'middle',
          horizontal: 'center',
        },
      },
    },
    {
      header: 'Queries',
      key: 'queries',
      width: 40,
    },
    {
      header: 'Context Name',
      key: 'contextsName',
      width: 40,
    },
    {
      header: 'Context Count',
      key: 'contextsCount',
      width: 14,
      style: {
        alignment: {
          vertical: 'middle',
          horizontal: 'center',
        },
      },
    },
  ]

  // Format header cells
  const headerCells = ['A1', 'B1', 'C1', 'D1', 'E1']
  headerCells.forEach(cell => {
    const currentCell = sheet.getCell(cell)
    currentCell.alignment = {
      vertical: 'middle',
      horizontal: 'center',
    }
    currentCell.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' },
    }
    currentCell.font = {
      bold: true,
    }
  })
}

// Create aggregate sheet
workbook.addWorksheet('aggregate')
const aggregateSheet = workbook.getWorksheet('aggregate')
createAndFormatHeaders(aggregateSheet, 'aggregate')

let numRows = 0
for (const key in aggregate) {
  // Add category and occurrences
  aggregateSheet.addRow({
    category: key,
    occurences: aggregate[key].occurences,
  })
  const numQueries = aggregate[key].queries.length
  const numContexts = aggregate[key].contexts.length
  const mostLines =
    numQueries > numContexts ? aggregate[key].queries : aggregate[key].contexts

  mostLines.forEach((line, i) => {
    const rowNumber = numRows === 0 ? i + 2 : i + 1 + numRows
    const queryCell = `${cellDictionary['category']}${rowNumber}`
    const currentCell = aggregateSheet.getCell(queryCell)
    currentCell.value = key
  })

  // Add queries
  aggregate[key].queries.forEach((query, i) => {
    const rowNumber = numRows === 0 ? i + 2 : i + 1 + numRows
    const queryCell = `${cellDictionary['queries']}${rowNumber}`
    const currentCell = aggregateSheet.getCell(queryCell)
    currentCell.alignment = { wrapText: true }
    currentCell.value = query
  })

  // Add contexts
  aggregate[key].contexts.forEach((context, i) => {
    const rowNumber = numRows === 0 ? i + 2 : i + 1 + numRows

    const contextNameCell = `${cellDictionary['contextsName']}${rowNumber}`
    const contextCountCell = `${cellDictionary['contextsCount']}${rowNumber}`
    aggregateSheet.getCell(contextNameCell).value = context.name
    aggregateSheet.getCell(contextCountCell).value = context.count
  })

  numRows = aggregateSheet._rows.length
}

for (const key in aggregate) {
  workbook.addWorksheet(key)
  const currentSheet = workbook.getWorksheet(key)

  createAndFormatHeaders(currentSheet, key)

  // Add occurences
  currentSheet.addRow({
    category: key,
    occurences: aggregate[key].occurences,
  })

  // Add queries
  aggregate[key].queries.forEach((query, i) => {
    const queryCell = `${cellDictionary['queries']}${i + 2}`
    const currentCell = currentSheet.getCell(queryCell)
    currentCell.alignment = { wrapText: true }
    currentCell.value = query
  })

  // Add contexts
  aggregate[key].contexts.forEach((context, i) => {
    const contextNameCell = `${cellDictionary['contextsName']}${i + 2}`
    const contextCountCell = `${cellDictionary['contextsCount']}${i + 2}`
    currentSheet.getCell(contextNameCell).value = context.name
    currentSheet.getCell(contextCountCell).value = context.count
  })
}

workbook.xlsx.writeFile('./fileAggregate.xlsx')
