async function loadScores() {
  const response = await fetch("/api/scores"); // makes an HTTP GET request to the /api/scores endpoint of the server. fetch() makes network requests
  const scores = await response.json(); // extracts JSON content from the response using the json() method

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
  