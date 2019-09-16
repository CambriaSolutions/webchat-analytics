require('dotenv').config()
// const queries = require('./fallbackFullDetails_06-01_09-01')
const queries = require('./fallbackFullDetails_08-01_09-01')
// const queries = require('./fallbackQueries_06-01_07-01')
// const queries = require('./fallbackQueries_07-01_08-01')
// const queries = require('./fallbackQueries_08-01_09-01')
// const queries = require('./fallbackQueries_06-01_09-01')
const fs = require('fs')
const language = require('@google-cloud/language')
const client = new language.LanguageServiceClient()

//
async function getEntities(query) {
  let entitiesArray = []
  if (query.messageText && query.messageText.toLowerCase() !== 'no') {
    // Instantiates a client
    const individualDoc = {
      content: query.messageText,
      type: 'PLAIN_TEXT',
    }
    const [result] = await client.analyzeEntities({ document: individualDoc })
    const entities = result.entities

    entities.forEach(entity => {
      entitiesArray.push(entity.name)
    })
  }

  return { entitiesArray, message: query.messageText }
}

// Annotate Text provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call.
// https://cloud.google.com/natural-language/docs/reference/rest/v1/documents/annotateText
async function annotateText() {
  const individualDoc = {
    content: query.messageText,
    type: 'PLAIN_TEXT',
  }
  const features = {
    extractSyntax: true,
    extractEntities: true,
    extractDocumentSentiment: true,
    extractEntitySentiment: true,
    classifyText: true,
  }
  const request = { document: individualDoc, features }
  const [result] = await client.annotateText(request)
}

async function analyzeQueries() {
  let queryDictionary = {}
  queries.forEach(query => {
    // Store the available contexts if available
    let contexts = []
    query.outputContexts.forEach(context => {
      if (context) {
        contexts.push(context.context)
      }
    })

    // Identify the message text in the query object
    const message = query.messageText.toLowerCase().trim()
    if (queryDictionary[message]) {
      // The same message has been used before
      // Increment the count of that query
      queryDictionary[message].occurences += 1
      // Add any output contexts
      if (contexts.length > 0) {
        queryDictionary[message].context.push(contexts)
      }
    } else {
      // This is the first time the message has appeared
      // Populate our dictionary with the message and contexts if available
      queryDictionary[message] = {
        occurences: 1,
        context: contexts,
      }
    }
  })
  const sortableArray = []
  for (const phrase in queryDictionary) {
    sortableArray.push([phrase, queryDictionary[phrase]])
  }

  sortableArray.sort((a, b) => {
    return b[1].occurences - a[1].occurences
  })

  // Save full intent data
  fs.writeFile(
    `./dataFiles/mildlySorted.json`,
    JSON.stringify(sortableArray),
    err => {
      if (err) throw err
      console.log('Saved!')
    }
  )

  // Detects entities in the document
  let entitiesCollection = {}

  // Loop through the invididual queries to extract entities
  queries.forEach(async (query, i) => {
    // Minimize number of times we call the API
    if (i < 2000) {
      const entities = await getEntities(query)
      if (entities) {
        entities.entitiesArray.forEach(entity => {
          if (entitiesCollection[entity]) {
            // The same message has been used before
            // Increment the count of that query
            entitiesCollection[entity].occurences += 1
          } else {
            // This is the first time the message has appeared
            // Populate our dictionary with the message and contexts if available
            entitiesCollection[entity] = {
              occurences: 1,
            }
          }
        })
      }
    }
    const entitiesToSort = []
    for (const phrase in entitiesCollection) {
      entitiesToSort.push([phrase, entitiesCollection[phrase]])
    }

    entitiesToSort.sort((a, b) => {
      return b[1].occurences - a[1].occurences
    })
    console.log(entitiesToSort)
    // Save full intent data
    fs.writeFile(
      `./dataFiles/sortedEntities.json`,
      JSON.stringify(entitiesToSort),
      err => {
        if (err) throw err
        console.log('Saved!')
      }
    )
  })
  return entitiesCollection
}

const thing = async () => {
  try {
    const thingy = await analyzeQueries()
    if (thingy) {
      console.log(thingy)
    }
  } catch (err) {
    console.log(err)
  }
}
thing()
