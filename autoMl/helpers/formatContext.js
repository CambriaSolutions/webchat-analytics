const fs = require('fs')
const predictionAggregate = require('./predictions/predictionAggregate_06-01-10-01.json')

// Save predictions
for (const prediction in predictionAggregate) {
  let contexts = predictionAggregate[prediction].contexts

  let sortable = []
  if (contexts) {
    contexts.forEach(context => {
      sortable.push([context, context.count])
    })
  }
  sortable.sort((a, b) => {
    return b[1] - a[1]
  })
  let sortedContexts = sortable.map(context => {
    return context[0]
  })
  predictionAggregate[prediction].contexts = sortedContexts
}

fs.writeFile(
  `./predictions/predictionAggregate_06-01-10-01.json`,
  JSON.stringify(predictionAggregate),
  err => {
    if (err) throw err
    console.log('Saved!')
  }
)
