import firebase from "firebase" //
import "firebase/firestore";  // Import Firestore
import "firebase/auth";  // Import Firebase Auth
import "firebase/storage";  // Import Firebase Storage if needed

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDETp3QDfp6Xe48Z8ZX5Mev3F2tjEaSHGc",
  authDomain: "stackly-app.firebaseapp.com",
  projectId: "stackly-app",
  storageBucket: "stackly-app.appspot.com",
  messagingSenderId: "508832644959",
  appId: "1:508832644959:web:3690f8b16e38a1c62c40ea"
});

const db = firebaseApp.firestore()
const Fire = firebaseApp

export { db, Fire } 
