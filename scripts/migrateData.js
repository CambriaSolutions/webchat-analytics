const fs = require('fs')
require('dotenv').config()

const admin = require('firebase-admin')
admin.initializeApp()
const db = admin.firestore()

const getIntentNames = (agentDirectory) => {
    const intents = []
    fs.readdirSync(`${agentDirectory}/intents`).forEach(function (file) {
        const filename = file.split('/').pop()
        if (!filename.endsWith('_usersays_en.json')) {
            intents.push(`${file.replace('.json', '')}`)
        }
    })

    return intents
}

const createIntentMap = (intentNames) => {
    const intentMap = new Map()

    intentNames.forEach(currentIntentName => {
        if(currentIntentName.startsWith('cse-')) {
            const intentNameParts = currentIntentName.split('-')
            intentNameParts.shift()
            const originalIntentName = intentNameParts.join('-')
            intentMap.set(originalIntentName, currentIntentName)
        }
    })

    intentMap.delete('root')

    return intentMap
}

const updateIntentNames = (intentMap, data) => {
    let stringifedData = JSON.stringify(data);
    [...intentMap.keys()].forEach(originalIntentName => {
        if (stringifedData.includes(originalIntentName)) {
            stringifedData = stringifedData.replace(originalIntentName, intentMap.get(originalIntentName))
            stringifedData = stringifedData.replace('cse-cse-', 'cse-')
        }
    })

    return JSON.parse(stringifedData)
}

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

const migrateCollection = async (currentCollectionPath, targetCollectionPath, intentMap) => {
    const targetCollectionRef = db.collection(targetCollectionPath);
    const snapshot = await db.collection(currentCollectionPath).get();
    if (snapshot.empty) {
        console.log('No matching documents.', currentCollectionPath);
    } else {
        console.log(`${snapshot.docs.length} docs`);
        await asyncForEach(snapshot.docs, async doc => {
            const updatedDoc = updateIntentNames(intentMap, doc.data())
            await targetCollectionRef.doc(doc.id).set(updatedDoc)
        })        
    }
}

const migrateProjectToSubjectMatter = async (project, subjectMatter) => {
    const intentMap = createIntentMap(getIntentNames('../../mdhs-csa/agent'))

    const snapshot = await db.collection("projects").doc(project).get();
    if (snapshot.empty || snapshot.data() === undefined) {
        console.log('No matching documents.');
    } else {
        console.log(`Creating subjectMatters/${subjectMatter}`);
        await db.collection("subjectMatters").doc(subjectMatter).set(snapshot.data())
    }

    await asyncForEach(["conversations", "metrics", "queriesForLabeling", "queriesForTraining", "requests"], async subCollection => {
        console.log(`Migrating projects/${project}/${subCollection} => subjectMatters/${subjectMatter}/${subCollection}`)
        await migrateCollection(`projects/${project}/${subCollection}`, `subjectMatters/${subjectMatter}/${subCollection}`, intentMap);
    })
}

// // TODO enter the projectName and the target subject matter before running
migrateProjectToSubjectMatter('mdhs-csa-dev', 'test-migrate-cse')
// // migrateProjectToSubjectMatter('mdhs-csa-isd-273818', 'cse')
// // migrateProjectToSubjectMatter('mdhs-csa-stage', 'cse')
// // migrateProjectToSubjectMatter('mdhs-csa', 'cse')


