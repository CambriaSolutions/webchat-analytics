// require('dotenv').config()
// const functions = require('firebase-functions')
// const { Parser } = require('json2csv')
// const dialogflow = require('dialogflow')
// const automl = require('@google-cloud/automl')

// const intentsClient = new dialogflow.IntentsClient()

// //Instantiate autoML client
// const client = new automl.v1beta1.AutoMlClient({
//   // optional auth parameters
//   client_email: `${process.env.AUTOML_CLIENT_EMAIL}`,
//   private_key: `${process.env.AUTOML_PRIVATE_KEY.replace(/\\n/g, '\n')}`,
// })
// exports = module.exports = functions.firestore
//   .document('/projects/mdhs-csa-dev/test/{testId}')
//   .onUpdate(async (change, context) => {
//     const afterUpdateFields = change.after.data()
//     const occurrences = afterUpdateFields.occurrences
//     const phrase = afterUpdateFields.phrase
//     if (occurrences === 10) {
//       // train agent
//       try {
//         let intent = await getIntent(
//           'projects/mdhs-csa-dev-beta/agent/intents/2b8c862a-4607-40ac-9ad0-2e01171a3b93' // TODO get intent id from db
//         )
//         let trainingPhrase = {
//           parts: [
//             {
//               text: phrase,
//             },
//           ],
//         }
//         intent.trainingPhrases.push(trainingPhrase)
//         try {
//           let updatedIntent = await updateIntent(intent)
//           console.log('Updated intent with new training phrase.')
//         } catch (e) {
//           console.log('Unable to update intent')
//           console.log(e)
//         }
//       } catch (err) {
//         console.log('Unable to get intent')
//         console.log(err)
//       }
//       // train category model
//       // train subject matter model
//     }
//     return afterUpdateFields.occurrences
//   })

// async function getIntent(intentId) {
//   try {
//     let responses = await intentsClient.getIntent({
//       name: intentId,
//       intentView: 'INTENT_VIEW_FULL',
//     })
//     const response = responses[0]
//     return response
//   } catch (err) {
//     return err
//   }
// }
// async function updateIntent(intent) {
//   const request = {
//     intent: intent,
//     intentView: 'INTENT_VIEW_FULL',
//   }
//   try {
//     return (responses = await intentsClient.updateIntent(request))
//   } catch (err) {
//     return err
//   }
// }
