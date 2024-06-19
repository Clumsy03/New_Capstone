// file: src/config/firebase.js 
const admin = require('firebase-admin');
const serviceAccount = require("../FirebaseService.json");
require("dotenv").config();
const firebase = require("firebase/app");

const firebaseConfig = {
    apiKey: "AIzaSyCOODo8FWt4Y1M_llrWBbSpc_eholvEZHE",
    authDomain: "capstone-c241-pr554.firebaseapp.com",
    projectId: "capstone-c241-pr554",
    storageBucket: "capstone-c241-pr554.appspot.com",
    messagingSenderId: "951540422904",
    appId: "1:951540422904:web:b4afaed0f2e051c5bb430d",
    measurementId: "G-BQG7PFZ0SF"
  };

firebase.initializeApp(firebaseConfig);
console.log(firebaseConfig);


const {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail
} = require("firebase/auth");

module.exports = {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail,
    admin
};



admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { admin, db };

module.exports = {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail,
    admin
};
