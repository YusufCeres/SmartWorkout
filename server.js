const express = require('express');
const { doc, getDoc, setDoc } = require('firebase/firestore');
const { db } = require('./firebase');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('.'));
app.use(express.json());

const docRef = doc(db, 'workouts', 'data');

// 🔷 GET all workout data
app.get('/workout-data', async (req, res) => {
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      res.json(docSnap.data());
    } else {
      res.json({}); // or some default structure
    }
  } catch (error) {
    console.error('Error reading workout data:', error);
    res.status(500).json({ success: false, message: 'Error reading workout data' });
  }
});

// 🔷 POST (save / overwrite all workout data)
app.post('/save-workout', async (req, res) => {
  try {
    const workoutData = req.body;
    await setDoc(docRef, workoutData);
    res.json({ success: true, message: 'Workout data saved successfully' });
  } catch (error) {
    console.error('Error saving workout data:', error);
    res.status(500).json({ success: false, message: 'Error saving workout data' });
  }
});

// 🔷 PUT (update / overwrite all workout data)
app.put('/workout-data', async (req, res) => {
  try {
    const newData = req.body;
    await setDoc(docRef, newData);
    res.json({ success: true, message: 'Workout data updated successfully' });
  } catch (error) {
    console.error('Error updating workout data:', error);
    res.status(500).json({ success: false, message: 'Error updating workout data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
