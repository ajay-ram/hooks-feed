import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCIClO7OLD82ZQL3Tqws9iBZS0cSIiRJW4",
    authDomain: "feedtest-a29b2.firebaseapp.com",
    databaseURL: "https://feedtest-a29b2-default-rtdb.firebaseio.com",
    projectId: "feedtest-a29b2",
    storageBucket: "feedtest-a29b2.appspot.com",
    messagingSenderId: "992856564099",
    appId: "1:992856564099:web:fc7c3a0a9911d8a89f96b6",
    measurementId: "G-7GJP357E13"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;