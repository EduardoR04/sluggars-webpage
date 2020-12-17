import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5sSUQ5tjKMDZ1nwOZ13T3qrC-RD8s3jQ",
  authDomain: "clone-5faaa.firebaseapp.com",
  databaseURL: "https://clone-5faaa.firebaseio.com",
  projectId: "clone-5faaa",
  storageBucket: "clone-5faaa.appspot.com",
  messagingSenderId: "729524107665",
  appId: "1:729524107665:web:57f269bf28811c21bbc230",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
