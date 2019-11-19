require('dotenv').config()
const functions = require('firebase-functions')
const admin = require('firebase-admin')
const dialogflow = require('dialogflow')

const store = admin.firestore()

const intentsClient = new dialogflow.IntentsClient()

/**
 * Trigger function on 'queriesForTraining' collection updates
 * to determine occurrence threshold for DF agent training
 */
exports = module.exports = functions.firestore
  .document(`/projects/${process.env.AGENT_PROJECT}/queriesForTraining/{id}`)
  .onUpdate(async (change, context) => {
    const docId = context.params.id
    const afterUpdateFields = change.after.data()
    const agentTrained = afterUpdateFields.agentTrained
    const occurrences = afterUpdateFields.occurrences
    const phrase = afterUpdateFields.phrase
    const intentId = afterUpdateFields.intent.id
    // If occurrences reaches 10 and agent is not trained
    if (occurrences === 10 && agentTrained === false) {
      await trainAgent(phrase, intentId, docId)
    }
    return afterUpdateFields
  })

/**
 * Train DF agent
 * @param {*} phrase user phrase from db
 * @param {*} intentId matched intent id
 * @param {*} docId document id in firebase
 */
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
    // add new training phrase in the intent list of training phrases
    intent.trainingPhrases.push(trainingPhrase)
    try {
      // updates the intent with intent object containing the new training phrase
      let updatedIntent = await updateIntent(intent)
      console.log('Updated intent with new training phrase.')
      // set agentTrained to true after we updated the intent
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

/**
 * Get DF intent data by intent id
 * @param {*} intentId
 */
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
/**
 * Update DF agent
 * @param {*} intent
 */
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
