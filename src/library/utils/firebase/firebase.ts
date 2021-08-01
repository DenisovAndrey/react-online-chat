import firebase from 'firebase/app';
import 'firebase/firestore';

require('firebase/auth');

export const firebaseInit = firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
});

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const auth = firebase.auth();
