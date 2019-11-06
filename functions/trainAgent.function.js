require('dotenv').config()
const functions = require('firebase-functions')
const admin = require('firebase-admin')
const dialogflow = require('dialogflow')

const store = admin.firestore()

const intentsClient = new dialogflow.IntentsClient()

exports = module.exports = functions.firestore
  .document(`/projects/${process.env.AGENT_PROJECT}/queriesForTraining/{id}`)
  .onUpdate(async (change, context) => {
    const docId = context.params.id
    const afterUpdateFields = change.after.data()
    const agentTrained = afterUpdateFields.agentTrained
    const occurrences = afterUpdateFields.occurrences

    const phrase = afterUpdateFields.phrase
    const intentId = afterUpdateFields.intent.id

    if (occurrences === 10 && agentTrained === false) {
      // train DF agent
      await trainAgent(phrase, intentId, docId)
    }
    return afterUpdateFields
  })

async function trainAgent(phrase, intentId, docId) {
  try {
    let intent = await getIntent(
      `projects/${process.env.AGENT_PROJECT}/agent/intents/${intentId}`
    )
    let trainingPhrase = {
      parts: [
        {
          text: phrase,
        },
      ],
    }
    intent.trainingPhrases.push(trainingPhrase)
    try {
      let updatedIntent = await updateIntent(intent)
      console.log('Updated intent with new training phrase.')
      await store
        .collection(
          `/projects/${process.env.AGENT_PROJECT}/queriesForTraining/`
        )
        .doc(docId)
        .update({ agentTrained: true })
    } catch (e) {
      console.log('Unable to train intent', e)
    }
  } catch (err) {
    console.log('Unable to get intent', err)
  }
}

async function getIntent(intentId) {
  try {
    let responses = await intentsClient.getIntent({
      name: intentId,
      intentView: 'INTENT_VIEW_FULL',
    })
    const response = responses[0]
    return response
  } catch (err) {
    return err
  }
}
async function updateIntent(intent) {
  const request = {
    intent: intent,
    intentView: 'INTENT_VIEW_FULL',
  }
  try {
    return (responses = await intentsClient.updateIntent(request))
  } catch (err) {
    return err
  }
}
