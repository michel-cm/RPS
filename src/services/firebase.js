import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDyHKnfPHQq0mA23MGGk8rGqEWd7o8ECdk",
  authDomain: "spr-segundo.firebaseapp.com",
  projectId: "spr-segundo",
  storageBucket: "spr-segundo.appspot.com",
  messagingSenderId: "558642941759",
  appId: "1:558642941759:web:9fe5d1646eef144a414d8a",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.firestore();

export { firebase, auth, database };
