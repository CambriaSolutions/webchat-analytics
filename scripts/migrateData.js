require('dotenv').config()

const admin = require('firebase-admin')
admin.initializeApp()
const db = admin.firestore()

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

const migrateCollection = async (currentCollectionPath, targetCollectionPath) => {
    const targetCollectionRef = db.collection(targetCollectionPath);
    const snapshot = await db.collection(currentCollectionPath).get();
    if (snapshot.empty) {
        console.log('No matching documents.', currentCollectionPath);
    } else {
        console.log(`${snapshot.docs.length} docs`);
        await asyncForEach(snapshot.docs, async doc => {
            await targetCollectionRef.doc(doc.id).set(doc.data())
        })        
    }
}

const migrateProjectToSubjectMatter = async (project, subjectMatter) => {
    const snapshot = await db.collection("projects").doc(project).get();
    if (snapshot.empty || snapshot.data() === undefined) {
        console.log('No matching documents.');
    } else {
        console.log(`Creating subjectMatters/${subjectMatter}`);
        await db.collection("subjectMatters").doc(subjectMatter).set(snapshot.data())
    }

    await asyncForEach(["conversations", "metrics", "queriesForLabeling", "queriesForTraining", "requests"], async subCollection => {
        console.log(`Migrating projects/${project}/${subCollection} => subjectMatters/${subjectMatter}/${subCollection}`)
        await migrateCollection(`projects/${project}/${subCollection}`, `subjectMatters/${subjectMatter}/${subCollection}`);
    })
}

// TODO enter the projectName and the target subject matter before running
migrateProjectToSubjectMatter('mdhs-csa-dev', 'cse')
// migrateProjectToSubjectMatter('mdhs-csa-isd-273818', 'cse')
// migrateProjectToSubjectMatter('mdhs-csa-stage', 'cse')
// migrateProjectToSubjectMatter('mdhs-csa', 'cse')


