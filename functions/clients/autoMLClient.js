require('dotenv').config()
const automl = require('@google-cloud/automl')

const createAutoMLClientForSubjectMatter = (subjectMatter) => {
  const clientOptions = {
    client_email: `${process.env[subjectMatter.toUpperCase() + '_AUTOML_CLIENT_EMAIL']}`,
    private_key: (process.env[subjectMatter.toUpperCase() + '_AUTOML_PRIVATE_KEY'] || "").replace('/\\n/g', '\n')
  }

  return new automl.v1beta1.AutoMlClient(clientOptions)
}

export default createAutoMLClientForSubjectMatter