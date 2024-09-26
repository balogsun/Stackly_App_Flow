import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCDF70YhkQKaaHrkUT4u6qfIbhePKfEeHo",
  authDomain: "stackly-2a177.firebaseapp.com",
  projectId: "stackly-2a177",
  storageBucket: "stackly-2a177.appspot.com",
  messagingSenderId: "423644792364",
  appId: "1:423644792364:web:baf023c31fb5f9554e3389"
});

const db = firebaseApp.firestore()
const Fire = firebaseApp

export { db, Fire } 

// import firebase from "firebase" //
// import "firebase/firestore";  // Import Firestore
// import "firebase/auth";  // Import Firebase Auth
// import "firebase/storage";  // Import Firebase Storage if needed
// 
// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyDETp3QDfp6Xe48Z8ZX5Mev3F2tjEaSHGc",
//   authDomain: "stackly-app.firebaseapp.com",
//   projectId: "stackly-app",
//   storageBucket: "stackly-app.appspot.com",
//   messagingSenderId: "508832644959",
//   appId: "1:508832644959:web:3690f8b16e38a1c62c40ea"
// });
// 
// const db = firebaseApp.firestore()
// const Fire = firebaseApp
// 
// export { db, Fire } 



// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//const firebaseConfig = {
//  apiKey: "AIzaSyDETp3QDfp6Xe48Z8ZX5Mev3F2tjEaSHGc",
//  authDomain: "stackly-app.firebaseapp.com",
//  projectId: "stackly-app",
//  storageBucket: "stackly-app.appspot.com",
//  messagingSenderId: "508832644959",
//  appId: "1:508832644959:web:3690f8b16e38a1c62c40ea"
//};
//
// Initialize Firebase
//const app = initializeApp(firebaseConfig);