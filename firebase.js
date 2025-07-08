const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDMRdan1Y6wnUQZvF6cT3cGpcrgou__jTs",
  authDomain: "smart-workout-99f89.firebaseapp.com",
  projectId: "smart-workout-99f89",
  storageBucket: "smart-workout-99f89.firebasestorage.app",
  messagingSenderId: "918088054905",
  appId: "1:918088054905:web:58822117123210c4a57ca8",
  measurementId: "G-FWY9ET70G4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { db };
