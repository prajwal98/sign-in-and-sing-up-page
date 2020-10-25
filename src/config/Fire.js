import firebase from 'firebase/app'
require('firebase/auth')



var firebaseConfig = {
  apiKey: "AIzaSyCUXKZdzpThFCc6zGGPoOgTeGJ9WTpR-oI",
  authDomain: "assignment-ed04d.firebaseapp.com",
  databaseURL: "https://assignment-ed04d.firebaseio.com",
  projectId: "assignment-ed04d",
  storageBucket: "assignment-ed04d.appspot.com",
  messagingSenderId: "810542711146",
  appId: "1:810542711146:web:4bbee988ae74b0ac626513"
};

  const fire = firebase.initializeApp(firebaseConfig);

//export default firebase;
  export default fire;