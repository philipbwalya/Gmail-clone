import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
const firebaseConfig = {
  apiKey: "AIzaSyDx0NWHbXeFqWIJDQ2_XIGgZRPG7I8wFC0",
  authDomain: "clone-dee69.firebaseapp.com",
  projectId: "clone-dee69",
  storageBucket: "clone-dee69.appspot.com",
  messagingSenderId: "583987773720",
  appId: "1:583987773720:web:22d9e61ca9ea90e316de6d"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider};