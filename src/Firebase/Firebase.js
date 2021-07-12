// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCNVG0UtkasHBVg-k360bEPr1Ge71F_VXg",
  authDomain: "clone-a543c.firebaseapp.com",
  projectId: "clone-a543c",
  databaseUrl: "https://clone-a543c-default-rtdb.firebaseio.com/",
  storageBucket: "clone-a543c.appspot.com",
  messagingSenderId: "1056403621252",
  appId: "1:1056403621252:web:d20b6ee72fb26ab65d09d1",
  measurementId: "G-Z5DZNWCDXK",
});

// const db = firebaseApp.fireStore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export default db;
export { auth, provider };
