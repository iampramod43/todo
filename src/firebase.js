import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5SuBO-52JM4ZXikpaLU-sDfX44mGieSI",
    authDomain: "todo-dd9c1.firebaseapp.com",
    projectId: "todo-dd9c1",
    storageBucket: "todo-dd9c1.appspot.com",
    messagingSenderId: "701844200329",
    appId: "1:701844200329:web:1f7a3932eb576f320a1f58",
    measurementId: "G-XP01NCJGTN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;