const Excel = require('exceljs')
const workbook = new Excel.Workbook()
const aggregate = require('../predictions/predictionAggregate_06-01-10-01.json')

const cellDictionary = {
  occurences: 'A',
  queries: 'B',
  contextsName: 'C',
  contextsCount: 'D',
}

for (const key in aggregate) {
  workbook.addWorksheet(key)
  const currentSheet = workbook.getWorksheet(key)

  // Create columns
  currentSheet.columns = [
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
  const headerCells = ['A1', 'B1', 'C1', 'D1']
  headerCells.forEach(cell => {
    const currentCell = currentSheet.getCell(cell)
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

  // Add occurences
  currentSheet.addRow({
    occurences: aggregate[key].occurences,
  })

  // Add queries
  aggregate[key].queries.forEach((query, i) => {
    const queryCell = `${cellDictionary['queries']}${i + 2}`
    const currentCell = currentSheet.getCell(queryCell)
    currentSheet.alignment = { wrapText: true }
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
