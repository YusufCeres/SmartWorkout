const fs = require('fs').promises;
const path = require('path');

const dataFilePath = path.join(__dirname, 'workout-data.json');

async function addExercise({ user, day, name, sets, reps, weight, notes }) {
    const data = JSON.parse(await fs.readFile(dataFilePath, 'utf-8'));
    if (!data[user] || !data[user][day]) throw new Error('User or day not found');
    data[user][day].exercises.push({ name, sets, reps, weight, notes });
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
    return true;
}

module.exports = { addExercise };
