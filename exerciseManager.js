const { doc, getDoc, setDoc } = require('firebase/firestore');
const { db } = require('./firebase');

const docRef = doc(db, 'workouts', 'data');

async function addExercise({ user, day, name, sets, reps, weight, notes }) {
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) throw new Error('No workout data found');

  const data = docSnap.data();

  if (!data[user] || !data[user][day]) {
    throw new Error(`User or day not found: ${user} ${day}`);
  }

  data[user][day].exercises.push({ name, sets, reps, weight, notes });

  await setDoc(docRef, data);
  return true;
}

module.exports = { addExercise };
