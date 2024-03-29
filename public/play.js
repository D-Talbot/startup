// Event messages
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
const GameEndEvent = 'gameEnd';
const GameStartEvent = 'gameStart';

let randomWord;
let totalScore = 0;
let hiddenWord = ['_', '_', '_', '_', '_', '_', '_', '_'];

wordArray = ["Mallards", "Puddling","Duckling", "Preening", "Quacking", "Waddling",
"Flapping","Feathers","Plumages","Nestling","Pintails","Paddling","Waterfow","Feasting",
"Dabbling","Gadwalls","Migrator","Duckweed","Brooding","Plucking","Sculling","Billings",
"Shelduck","Tealduck","Gaggling","Duckboat","Mudflats","Downhill","Mallardy","Pintails",
"Swansong","Whistler","Ductwork","Flighted","Redheads","Surfaced","Cacklers","Poaching",
"Quackers","Shoveler","Pinioned","Flocking","Plucking","Migrates","Preening","Feathers",
"Bluebill","Flocking","Cloudbed","Evermore","Fireball","Grateful","Highrise","Moonwalk",
"Tranquil","Upstream","Wonderer","Ambition","Infinity","Universe","Atlantis","Luminary",
"Patience","Serenity","Thriller","Zenithal","Catalyst","Dazzling","Spirited","Creative",
"Flourish","Pleasure","Sparking","Dreaming","Inspired","Joyously","Loveable","Momentum",
"Pleasure","Tranquil","Airplane","Birthday","Campaign","Deadline","Elephant","Football",
"Joyously","Lavender","Necklace","Password","Rainbowy","Sunshine","Template","Wildlife",
"Hospital","Optimism","Exciting","Mystique","Overcome","Paradise","Quickset","Rainbowy"]

async function sendScores(score) {
    let scoreToSend = {
        name: getPlayerName(),
        socket : socket,
        score: score,
    }
}

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
}

// pull username
function displayPlayerName() {
    const playerName = getPlayerName();
    const duckRescuer = document.getElementById('player-name');
    duckRescuer.textContent = playerName;
}

function isGameOver() {
    return !hiddenWord.includes('_');
}

// logic for displaying letter once correct one is chosen
function addLetter(letter, elemendID) {
    // is the letter in the word? 
    if (guessesLeft <= 0){
        return;
    }
    if (randomWord.toLowerCase().includes(letter.toLowerCase())) {
        document.getElementById(elemendID).classList.add('success');
        // Unveil the letter in the hidden word
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord.toLowerCase()[i] === letter.toLowerCase()) {
                hiddenWord[i] = letter.toLowerCase();
            }
        }
        const wordDisplay = document.getElementById('underscores');
        wordDisplay.textContent = hiddenWord.join(' ');
        if (isGameOver()) {
            totalScore += 1;
            saveScore(totalScore);
            sendScores(totalScore);
            broadcastEvent(getPlayerName(), GameEndEvent, {});
        }
    }
    // greying out button color if incorrect letter choice
    // decrease the guesses left value 
    else {
        document.getElementById(elemendID).classList.add('failure');
        guessesLeft -= 1;
        document.getElementById('count').value = guessesLeft;
    }
}

function initializeGame() {
    guessesLeft = 9;
    // randomize word chosen 
    randomIndex = Math.floor(Math.random() * wordArray.length);
    randomWord = wordArray[randomIndex];
    const wordDisplay = document.getElementById('underscores');
}

function updateScore(score) {
    const scoreEl = document.querySelector('#score');
    scoreEl.textContent = score;
}

function updateScores(userName, score, scores) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }

    return scores;
}

async function saveScore(score) {
    const userName = getPlayerName();
    const date = new Date().toLocaleDateString();
    const newScore = {name: userName, score: score, date: date};

    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newScore),
      });

      // Store what the service gave us as the high scores
      const scores = await response.json();
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just track scores locally
      updateScoresLocal(newScore);
    }
  }

  function updateScoresLocal(newScore) {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (newScore > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }

    localStorage.setItem('scores', JSON.stringify(scores));
  }

  // Functionality for peer communication using WebSocket

  function configureWebSocket() {
    socket.onopen = (event) => {
      displayMsg('system', 'game', 'connected');
    };
    socket.onclose = (event) => {
      displayMsg('system', 'game', 'disconnected');
    };
    socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === GameEndEvent) {
        displayMsg('player', msg.from, `saved a duck!`);
      } else if (msg.type === GameStartEvent) {
        displayMsg('player', msg.from, `started a new game`);
      }
    };
  }

  function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

  function broadcastEvent(from, type, value, score) {
    const event = {
      from: from,
      type: type,
      score: score,
      value: value,
    };
    socket.send(JSON.stringify(event));
  }

  // reset game (if pressed) -> choose new word clear board
function reset() {
  const wordDisplay = document.getElementById('underscores');
  hiddenWord = ['_', '_', '_', '_', '_', '_', '_', '_'];
  wordDisplay.textContent = hiddenWord.join(' ');
  initializeGame();
  Array.from(document.getElementById('buttons').children).forEach(element => {
      element.classList.remove('failure');
      element.classList.remove('success');
  });
  // Let other players know a new game has started
  broadcastEvent(getPlayerName(), GameStartEvent, {});
}

// main -> function calls
window.onload = () => {
  initializeGame();
  displayPlayerName();
  configureWebSocket();
  
// const chatText = document.querySelector('#player-messages');

}
