import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyCZbcIWBEW7rXQP6Xy2TBCSN3IQ7ww5sPY",
    authDomain: "webchat-analytics-dev.firebaseapp.com",
    databaseURL: "https://webchat-analytics-dev.firebaseio.com",
    projectId: "webchat-analytics-dev",
    storageBucket: "webchat-analytics-dev.appspot.com",
    messagingSenderId: "454176291577",
    appId: "1:454176291577:web:80d9bb0066e476e90a0028"
  };
firebase.initializeApp(config)

const db = firebase.firestore()

export default db

export const authRef = firebase.auth()
