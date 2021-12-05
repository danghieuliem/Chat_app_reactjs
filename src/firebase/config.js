
import firebase from "firebase/compat/app";
import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJGLImdPKW7mdgRyw3MOmcm8wQgUenSJA",
  authDomain: "chat-app-reactjs-c5f33.firebaseapp.com",
  projectId: "chat-app-reactjs-c5f33",
  storageBucket: "chat-app-reactjs-c5f33.appspot.com",
  messagingSenderId: "836436212254",
  appId: "1:836436212254:web:0033fa838071bc39e18c0f",
  measurementId: "G-5LPP8B3WYY"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export {db , auth}
export default firebase