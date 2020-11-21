import firebase from 'firebase'
import firestore from 'firebase/firestore'

//initialize Firebase
var config = {
    apiKey: "AIzaSyBsjG8mEULDD26xyQaZx5kvf_NylgQALJg",
    authDomain: "udemy-ninja-smoothies-4afe2.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-4afe2.firebaseio.com",
    projectId: "udemy-ninja-smoothies-4afe2",
    storageBucket: "udemy-ninja-smoothies-4afe2.appspot.com",
    messagingSenderId: "261952979249",
    appId: "1:261952979249:web:beacbf6026a9b2e7dc3010",
    measurementId: "G-HW5JTT147H"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots: true})
  //export firestone database

  export default firebaseApp.firestore()