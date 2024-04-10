const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

// do NOT want commit to github my info..
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('SaveDuck');
const userCollection = db.collection('user');
const scoreCollection = db.collection('score');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with this url: ${url} because: ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function addScore(score) {
  const query = {date: score.date, name: score.name};
  const value = await scoreCollection.findOne(query);
  console.log(value);
  if (!value){
    scoreCollection.insertOne(score);
  }
  scoreCollection.findOneAndUpdate(query, { $inc: {score: 1}});
  console.log(score);
}

async function getHighScores() {
  const query = { score: { $gt: 0, $lt: 100 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = await scoreCollection.find(query, options);
  return cursor.toArray();
}

// neccessary for index.js
module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addScore,
  getHighScores,
};
