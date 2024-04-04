async function loadScores() {
  let scores = [];
  try {
    // Get the latest high scores from the service
    const response = await fetch('/api/scores');
    scores = await response.json();

    // Save the scores in case we go offline in the future
    localStorage.setItem('scores', JSON.stringify(scores));
  } catch {
    // If there was an error then just use the last saved scores
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }
  }

  displayScores(scores);
}

async function displayScores(scores) {
  // Modify DOM
  const tableBodyEl = document.querySelector('#scores');
  
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      const rankTdel = document.createElement('td');
      const rescuerTdel = document.createElement('td');
      const duckssavedTdEl = document.createElement('td');
      const dateTdEl = document.createElement('td');

      rankTdel.textContent = i + 1;
      rescuerTdel.textContent = score.name;
      duckssavedTdEl.textContent = score.score;
      dateTdEl.textContent = score.date;

      const rowEl = document.createElement('tr');
      rowEl.appendChild(rankTdel);
      rowEl.appendChild(rescuerTdel);
      rowEl.appendChild(duckssavedTdEl);
      rowEl.appendChild(dateTdEl);

      tableBodyEl.appendChild(rowEl);
    }
  } else {
    tableBodyEl.innerHTML = '<tr><td colSpan=4>What are you doing?! There is no time to waste. Get back to saving ducks <i>ASAP</i> !!</td></tr>';
  }

}

  loadScores();
  