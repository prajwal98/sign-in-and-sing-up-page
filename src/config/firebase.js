
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDOsrOXlsN3UQWD9hpGgkJZQ1pEyqcmC_M",
    authDomain: "test-e4dcf.firebaseapp.com",
    databaseURL: "https://test-e4dcf.firebaseio.com",
    projectId: "test-e4dcf",
    storageBucket: "test-e4dcf.appspot.com",
    messagingSenderId: "288605801738",
    appId: "1:288605801738:web:07417a651af69f0f633ef3",
    measurementId: "G-FTVXBSVP53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;