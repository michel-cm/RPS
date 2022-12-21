import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBUH3LYUcNMCdr3av21OIWZA8CeSkjkoVg",
  authDomain: "spr-76111.firebaseapp.com",
  projectId: "spr-76111",
  storageBucket: "spr-76111.appspot.com",
  messagingSenderId: "365304703073",
  appId: "1:365304703073:web:a92d1297b7528f623aa220",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.firestore();

export { firebase, auth, database };
