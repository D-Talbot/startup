// TODO: Finish File!
// Required modules and initialization
let scores = [];
const express = require('express');
const multer = require('multer');
const app = express();

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScores
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body);
  res.send(scores);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function updateScores(userName, score) {
  const date = new Date().toLocaleDateString(); // Get the current date
  const newScore = { name: userName.name, score: userName.score, date: date }; // Create a new score object with name, score, and date

  let found = false;
  console.log(scores);
  for (const [i, prevScore] of scores.entries()) { // Iterate through the existing scores
    if (score > prevScore.score) { 
      scores.splice(i, 0, newScore); // Insert the new score at the appropriate position in the array
      found = true;
      break;
    }
  }

  if (!found) {
    scores.push(newScore); // If the new score wasn't greater than any existing score, add it to the end of the array
  }

  if (scores.length > 10) { // Keep only the top 10 scores
    scores.length = 10;
  }

  return scores;
}