import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCzueKPmKlzUTh_a1mT6WbDjJQjmHO7X80",
    authDomain: "yukey-b4e7e.firebaseapp.com",
    databaseURL: "https://yukey-b4e7e-default-rtdb.firebaseio.com",
    projectId: "yukey-b4e7e",
    storageBucket: "yukey-b4e7e.appspot.com",
    messagingSenderId: "997208733762",
    appId: "1:997208733762:web:b17f870bdf680907e8d5db"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;