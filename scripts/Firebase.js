import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: 'AIzaSyBjMgpQq2n5jLXu_Wrju8LLBHu-0OCynNE',
  authDomain: 'test-chat-analytics.firebaseapp.com',
  databaseURL: 'https://test-chat-analytics.firebaseio.com',
  projectId: 'test-chat-analytics',
  storageBucket: 'webchat-analytics.appspot.com',
  messagingSenderId: '113536531381095043243',
}

firebase.initializeApp(config)

const db = firebase.firestore()

export default db

export const authRef = firebase.auth()
