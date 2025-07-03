const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Absolute path for workout-data.json
const dataFilePath = path.join(__dirname, 'workout-data.json');

// Serve static files (HTML, CSS, JS)
app.use(express.static('.'));
app.use(express.json());

// Handle saving workout data
app.post('/save-workout', async (req, res) => {
    try {
        const workoutData = req.body;
        await fs.writeFile(dataFilePath, JSON.stringify(workoutData, null, 2));
        res.json({ success: true, message: 'Workout data saved successfully' });
    } catch (error) {
        console.error('Error saving workout data:', error);
        res.status(500).json({ success: false, message: 'Error saving workout data' });
    }
});

// Get workout data
app.get('/workout-data', async (req, res) => {
    try {
        const data = await fs.readFile(dataFilePath, 'utf-8');
        res.json(JSON.parse(data));
    } catch (error) {
        if (error.code === 'ENOENT') {
            res.json([]); // Return empty array if file doesn't exist
        } else {
            console.error('Error reading workout data:', error);
            res.status(500).json({ success: false, message: 'Error reading workout data' });
        }
    }
});

// Edit (replace) workout data
app.put('/workout-data', async (req, res) => {
    try {
        const newData = req.body;
        await fs.writeFile(dataFilePath, JSON.stringify(newData, null, 2));
        res.json({ success: true, message: 'Workout data updated successfully' });
    } catch (error) {
        console.error('Error updating workout data:', error);
        res.status(500).json({ success: false, message: 'Error updating workout data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});