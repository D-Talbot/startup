// save score to scoreboard (and other data)
function loadScores() {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }
  
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
  