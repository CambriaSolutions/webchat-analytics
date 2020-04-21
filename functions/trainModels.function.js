require('dotenv').config()
const functions = require('firebase-functions')
const admin = require('firebase-admin')
const automl = require('@google-cloud/automl')
const format = require('date-fns/format')
const differenceInWeeks = require('date-fns/difference_in_weeks')
const store = admin.firestore()

// Instantiate autoML client
const client = new automl.v1beta1.AutoMlClient({
  client_email: `${process.env.AUTOML_CLIENT_EMAIL}`,
  private_key: `${process.env.AUTOML_PRIVATE_KEY.replace('/\\n/g', '\n')}`,
})

/**
 * Trigger function on 'queriesForTraining' collection updates
 * to determine if we should train the Category Model
 **/
exports = module.exports = functions.firestore
  .document(`/projects/${process.env.AGENT_PROJECT}/queriesForTraining/{id}`)
  .onUpdate(async (change, context) => {
    const afterUpdateFields = change.after.data()
    const agentTrained = afterUpdateFields.agentTrained
    const categoryModelImported = afterUpdateFields.categoryModelImported
    const categoryModelTrained = afterUpdateFields.categoryModelTrained
    const occurrences = afterUpdateFields.occurrences

    const projectRef = store.collection(`/projects/`)
    const mlStatus = await projectRef.get()
    let canTrainModel = false

    // Get date last trained, if more than a week, train it.
    mlStatus.forEach(doc => {
      const data = doc.data()
      if (!data.isImportProcessing && !data.isTrainingProcessing) {
        if (data.lastTrained) {
          const weekDiff = differenceInWeeks(
            data.lastTrained.toDate(),
            new Date()
          )
          if (weekDiff > 0) {
            canTrainModel = true
          }
        }
      }
    })
    if (
      canTrainModel &&
      agentTrained &&
      categoryModelImported &&
      !categoryModelTrained &&
      occurrences >= 10
    ) {
      try {
        await trainCategoryModel()
        const queriesToUpdate = await store
          .collection(
            `/projects/${process.env.AGENT_PROJECT}/queriesForTraining/`
          )
          .where('occurrences', '>=', 10)
          .where('categoryModelTrained', '==', false)
          .get()
        // Update training status in individual queries
        queriesToUpdate.forEach(async doc => {
          const data = doc.data()
          const query = await store
            .collection(
              `/projects/${process.env.AGENT_PROJECT}/queriesForTraining`
            )
            .doc(doc.id)
            .set({ categoryModelTrained: true }, { merge: true })
        })
      } catch (err) {
        console.log(err)
      }
    }
    return afterUpdateFields
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

    // Display model information
    console.log(`Model name: ${model.name}`)
    console.log(`Model id: ${model.name.split(`/`).pop(-1)}`)
    console.log(`Model display name: ${model.displayName}`)
    console.log(`Model create time:`)
    console.log(`\tseconds: ${model.createTime.seconds}`)
    console.log(`\tnanos: ${model.createTime.nanos}`)
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
