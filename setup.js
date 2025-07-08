// setup.js - Run this once to upload your JSON data to Firestore
const { doc, setDoc } = require('firebase/firestore');
const { db } = require('./firebase');
const fs = require('fs');

async function uploadWorkoutData() {
  try {
    console.log('📁 Reading workout-data.json...');
    
    // Read your JSON file
    const jsonData = JSON.parse(fs.readFileSync('./workout-data.json', 'utf8'));
    
    console.log('🔄 Uploading to Firestore...');
    
    // Upload to Firestore
    const docRef = doc(db, 'workouts', 'data');
    await setDoc(docRef, jsonData);
    
    console.log('✅ SUCCESS! Your workout data has been uploaded to Firestore!');
    console.log(`📊 Uploaded data for users: ${Object.keys(jsonData).join(', ')}`);
    
  } catch (error) {
    console.error('❌ ERROR:', error.message);
    
    if (error.code === 'ENOENT') {
      console.log('💡 Make sure workout-data.json exists in your project folder');
    } else if (error.message.includes('JSON')) {
      console.log('💡 Check that your JSON file is valid');
    } else {
      console.log('💡 Check your Firebase configuration in firebase.js');
    }
  }
}

// Run the upload
uploadWorkoutData();