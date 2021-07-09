// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCRTps8qx7qS5qBX2De9hLW6o5gFxMQMNM",
  authDomain: "clone-aafe0.firebaseapp.com",
  projectId: "clone-aafe0",
  storageBucket: "clone-aafe0.appspot.com",
  messagingSenderId: "712082105720",
  appId: "1:712082105720:web:ffbf25ce5530921988148d",
  measurementId: "G-2TKP6XFMKY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();



export {db , auth};