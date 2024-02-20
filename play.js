let randomWord;
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
        isGameOver();
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

function reset() {
    const wordDisplay = document.getElementById('underscores');
    hiddenWord = ['_', '_', '_', '_', '_', '_', '_', '_'];
    wordDisplay.textContent = hiddenWord.join(' ');
    initializeGame();
    Array.from(document.getElementById('buttons').children).forEach(element => {
        element.classList.remove('failure');
        element.classList.remove('success');
    });
}

// main -> function calls
window.onload = () => {
    initializeGame();
    displayPlayerName();
    // psuedo websocket data
    setInterval(() => {
        const score = Math.floor(Math.random() * 3000);
        const chatText = document.querySelector('#player-messages');
        chatText.innerHTML =
            `<div class="event"><span class="player-event">Eich</span> scored ${score}</div>` + chatText.innerHTML;
        }, 5000);
}

// reset game (if pressed) -> choose new word clear board
