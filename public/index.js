app.use(express.static('public'));
const express = require('express');
const app = express();

// The service port. In prod the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsinng using build-in middleware
app.use(express.json());

// Router for service endpoints 
const apiRouter = express.Router();
app.use('/api', apiRouter);

// GetScores
apiRouter.get('/socres', (_req, res) => {
  res.send(scores);
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
  res.sendFile('index.html', {root: 'public'});
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', {root: 'public'});
});

app.listen(port, () => {
  console.log('Listening on port ${port}');
});