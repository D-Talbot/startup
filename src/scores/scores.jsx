import React from 'react';

export function Scores() {
  const [scores, setScores] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/scores')
      .then((response) => response.json())
      .then((scores) => {
        setScores(scores);
        localStorage.setItem('scores', JSON.stringify(scores));
      })
      .catch(() => {
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
          setScores(JSON.parse(scoresText));
        }
      });
  }, []);

  const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of score.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.score}</td>
          <td>{score.date}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>What are you doing?! There is no time to waste. Get back to saving ducks <i>ASAP</i> !!</td>
      </tr>
    )
  }

  return (
    <main className="container-fluid bg-secondary text-center">
            <table className="table table-warning table-striped-columns">
                <thead className="table-dark">
                    <tr>
                        <th>Rank</th>
                        <th>Rescuer</th>
                        <th>Ducks Saved</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody id='scores'>{scoreRows}</tbody>
            </table>
        </main>
  );
}