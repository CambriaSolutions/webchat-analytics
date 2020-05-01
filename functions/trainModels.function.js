require('dotenv').config()
const functions = require('firebase-functions')
const admin = require('firebase-admin')
const automl = require('@google-cloud/automl')
const format = require('date-fns/format')
const differenceInWeeks = require('date-fns/difference_in_weeks')
const store = admin.firestore()

// Instantiate autoML client
const client = new automl.v1beta1.AutoMlClient()
const agentProject = 'mdhs-csa-stage'

const runtimeOpts = {
  timeoutSeconds: 60, 
  memory: '256MB',
}

/**
 * Trigger training weekly
 **/
exports = module.exports = functions
.runWith(runtimeOpts)
  .pubsub
  .schedule('0 21 * * 1') // Every Monday at 1 AM CST
  .timeZone('America/Los_Angeles')
  .onRun(async (context) => {
    try {
      await store
        .collection(
          `/projects/${process.env.AGENT_PROJECT}/queriesForTraining/`
        )
        .where('occurrences', '>=', 10)
        .where('categoryModelTrained', '==', false)
        .get()
        .then(async (snap) => {
          const queriesToTrain = snap.size;
          console.log(`Identified ${queriesToTrain} queries to train.`);
          
          if (queriesToTrain > 0) {
            // Train the model
            await trainCategoryModel()

            // Update training status in individual queries
            snap.forEach(async doc => {
              const query = await store
                .collection(
                  `/projects/${process.env.AGENT_PROJECT}/queriesForTraining`
                )
                .doc(doc.id)
                .set({ categoryModelTrained: true }, { merge: true })
            })
          } else {
            console.log("Training was skipped.")
          }

          return
        })
    } catch (err) {
      console.log(err)
    }
  })

// --------------------------------  TRAIN CATEGORY MODEL  --------------------------------

/**
 * Train Category Model
 * @param {*} intent
 */
async function trainCategoryModel() {
  const projectId = `${process.env.GCS_PROJECT_ID}`
  const computeRegion = `${process.env.AUTOML_LOCATION}`
  const datasetId = `${process.env.AUTOML_DATASET}`
  const date = format(new Date(), 'MM_DD_YYYY')
  const modelName = `mdhs_csa_analytics_${date}`

  const projectLocation = client.locationPath(projectId, computeRegion)

  // Set model name and model metadata for the dataset.
  const modelData = {
    displayName: modelName,
    datasetId: datasetId,
    textClassificationModelMetadata: {},
  }

  // Create a model with the model metadata in the region.
  try {
    const [operation, initialApiResponse] = await client.createModel({
      parent: projectLocation,
      model: modelData,
    })
    console.log(`Training operation name: ${initialApiResponse.name}`)
    console.log(`Training started...`)
    // Update training status in db
    await store
      .collection(`/projects/`)
      .doc(`${process.env.AGENT_PROJECT}`)
      .update({
        isTrainingProcessing: true,
      })
    const [model] = await operation.promise()
    // Retrieve deployment state.
    let deploymentState = ``
    if (model.deploymentState === 1) {
      deploymentState = `deployed`
      // Update training status in db
      await store
        .collection(`/projects/`)
        .doc(`${process.env.AGENT_PROJECT}`)
        .update({
          isTrainingProcessing: false,
          lastTrained: admin.firestore.Timestamp.now(),
        })
    } else if (model.deploymentState === 2) {
      deploymentState = `undeployed`
    }

    // Model information needed to review details in the GCP console
    console.log(`Model name: ${model.name}`)
    console.log(`Model deployment state: ${deploymentState}`)
  } catch (err) {
    console.log(err)
    await store
      .collection(`/projects/`)
      .doc(`${process.env.AGENT_PROJECT}`)
      .update({
        isTrainingProcessing: false,
      })
  }
}
