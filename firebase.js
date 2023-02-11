// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV-ozTMs3EivsvrqODjigjxu5KQgeuXNM",
  authDomain: "fir-auth-aab4d.firebaseapp.com",
  projectId: "fir-auth-aab4d",
  storageBucket: "fir-auth-aab4d.appspot.com",
  messagingSenderId: "97401860639",
  appId: "1:97401860639:web:98bde13df5108cf3039b2a"
};

// Initialize Firebase
let app;
if(firebase.app.length==0) {
    app = firebase.initializeApp(firebaseConfig);
} else{
    app = firebase.app()
}

const auth = firebase.auth()

export  { auth };