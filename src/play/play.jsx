import React from 'react';
import './play.css';

import hang2 from '../../public/hang2.png';

export function Play() {
    const [playerName, setPlayerName] = React.useState('Mystery Player');
    const [wordDisplay, setWordDisplay] = React.useState('');
    const [guessesLeft, setGuessesLeft] = React.useState(9);

    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    const GameEndEvent = 'gameEnd';
    const GameStartEvent = 'gameStart';
    let randomWord;
    let totalScore = 0;
    let hiddenWord = ['_', '_', '_', '_', '_', '_', '_', '_'];

    const wordArray = ["Mallards", "Puddling","Duckling", "Preening", "Quacking", "Waddling",
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
    
    React.useEffect(() => {
        initializeGame();
        displayPlayerName();
        configureWebSocket();
    },[])

    function getPlayerName() {
        return localStorage.getItem('userName') ?? 'Mystery player';
    }

    // pull username
    function displayPlayerName() {
        setPlayerName(getPlayerName());
    }

    function initializeGame() {
        setGuessesLeft(9);
        // randomize word chosen 
        const randomIndex = Math.floor(Math.random() * wordArray.length);
        randomWord = wordArray[randomIndex];
        setWordDisplay(wordDisplay);
    }

    function isGameOver() {
        return !hiddenWord.includes('_');
    }

    async function sendScores(score) {
        let scoreToSend = {
            name: getPlayerName(),
            socket : socket,
            score: score,
        }
    }

    // logic for displaying letter once correct one is chosen
    function addLetter(letter, elemendID) {
        // is the letter in the word? 
        if (guessesLeft <= 0){
            return;
        }

        const lowerCaseLetter = letter.toLowerCase(); // Convert letter to lowercase

        if (randomWord.toLowerCase().includes(lowerCaseLetter)) {
            document.getElementById(elemendID).classList.add('success');
            // Unveil the letter in the hidden word
            for (let i = 0; i < randomWord.length; i++) {
                if (randomWord.toLowerCase()[i] === lowerCaseLetter) {
                    hiddenWord[i] = lowerCaseLetter;
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
            setGuessesLeft(guessesLeft - 1);
        }
    }


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

  async function saveScore(score) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newScore),
      });

      // Let other players know the game has concluded
      GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);

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

    return (
    <main>
    <div className="block">
        <p className="players">Duck Rescuer: <span id="player-name">{playerName}</span> </p>
        <label className="form-label">Guesses Left:{guessesLeft}</label>
        <input className="form-control" type="number" id="count" value="9" readOnly/>
        <div id="player-messages"></div>
    </div>
    <div>
        
        <div className="left-side" style={{paddingLeft: "20px"}}>    
                <div className="wrap">
                    <img src={hang2} alt="hang" width="500"/>
                </div>
        </div>
        <div id="word-display">
            <h1 id="underscores">{hiddenWord.join(' ')}</h1>
        </div>
        <div className="right-side">
            <h2>Alphabet</h2>
            <div id="buttons">
                <button id="a-button" onClick={() => addLetter('A', 'a-button')}>A</button>
                <button id="b-button" onClick={() => addLetter('B', 'b-button')}>B</button>
                <button id="c-button" onClick={() => addLetter('C', 'c-button')}>C</button>
                <button id="d-button" onClick={() => addLetter('D', 'd-button')}>D</button>
                <button id="e-button" onClick={() => addLetter('E', 'e-button')}>E</button>
                <button id="f-button" onClick={() => addLetter('F', 'f-button')}>F</button>
                <button id="g-button" onClick={() => addLetter('G', 'g-button')}>G</button>
                <button id="h-button" onClick={() => addLetter('H', 'h-button')}>H</button>
                <button id="i-button" onClick={() => addLetter('I', 'i-button')}>I</button>
                <button id="j-button" onClick={() => addLetter('J', 'j-button')}>J</button>
                <button id="k-button" onClick={() => addLetter('K', 'k-button')}>K</button>
                <button id="l-button" onClick={() => addLetter('L', 'l-button')}>L</button>
                <button id="m-button" onClick={() => addLetter('M', 'm-button')}>M</button>
                <button id="n-button" onClick={() => addLetter('N', 'n-button')}>N</button>
                <button id="o-button" onClick={() => addLetter('O', 'o-button')}>O</button>
                <button id="p-button" onClick={() => addLetter('P', 'p-button')}>P</button>
                <button id="q-button" onClick={() => addLetter('Q', 'q-button')}>Q</button>
                <button id="r-button" onClick={() => addLetter('R', 'r-button')}>R</button>
                <button id="s-button" onClick={() => addLetter('S', 's-button')}>S</button>
                <button id="t-button" onClick={() => addLetter('T', 't-button')}>T</button>
                <button id="u-button" onClick={() => addLetter('U', 'u-button')}>U</button>
                <button id="v-button" onClick={() => addLetter('V', 'v-button')}>V</button>
                <button id="w-button" onClick={() => addLetter('W', 'w-button')}>W</button>
                <button id="x-button" onClick={() => addLetter('X', 'x-button')}>X</button>
                <button id="y-button" onClick={() => addLetter('Y', 'y-button')}>Y</button>
                <button id="z-button" onClick={() => addLetter('Z', 'z-button')}>Z</button>
            </div>
    
            <button style={{width: "72px"}} id="reset-button" onClick={() => reset()} className="button-primary">Reset</button>
        </div>
    </div>
</main>
  );
}