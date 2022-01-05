import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCg1lEFmv_kOboeI-zc_GAuAsanKdjrG58",
  authDomain: "project71e-ride.firebaseapp.com",
  projectId: "project71e-ride",
  storageBucket: "project71e-ride.appspot.com",
  messagingSenderId: "938987586219",
  appId: "1:938987586219:web:a66fb1afe9ba4dbae9adee"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
