# Workout Tracker

A full-stack web app for tracking workouts, built with Node.js, Express, Firebase Firestore, and a modern responsive frontend.

## Features
- Switch between multiple users and workout days
- Add, edit, and track exercises for each day
- Visual status indicator (green/orange/red) for each exercise, with last updated timestamp
- Responsive dark-themed UI with red accents
- Data is stored and synced in Firebase Firestore

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- Firebase project with Firestore enabled

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd WeightTracker
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up Firebase:
   - Create a `firebase.js` file in the project root with your Firebase config and export the Firestore `db` object. Example:
     ```js
     const { initializeApp } = require('firebase/app');
     const { getFirestore } = require('firebase/firestore');
     const firebaseConfig = { /* your config */ };
     const app = initializeApp(firebaseConfig);
     const db = getFirestore(app);
     module.exports = { db };
     ```
   - Add your Firebase credentials to a `.env` file if needed (and keep it in `.gitignore`).

### Running Locally
```sh
node server.js
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
- `server.js` — Express server, API endpoints, serves static files, connects to Firebase
- `index.html` — Main frontend UI
- `style.css` — All styles (dark theme, responsive)
- `firebase.js` — Firebase config (not included, you create this)
- `.gitignore` — Ignores `node_modules` and `.env`

## Usage
- Switch user/day with the buttons at the top
- Add new exercises with the form
- Click the colored circle next to an exercise to set your performance (green/orange/red)
- All changes are saved to Firebase and persist across reloads

## Deployment
- Can be deployed to Render, Railway, or any Node.js hosting
- Make sure your Firebase credentials are set up in the environment

## License
MIT
