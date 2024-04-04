import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="top bg-dark text-light" style="max-width: 100%;
overflow-x: none;">
    <header className="container-fluid" style="display: flex; flex-direction: row;">
    <nav className="navbar navbar-dark" style="display: flex; flex-direction: row;">
        <a href="index.html" id="duck-brand" style="text-decoration: none; display: flex; justify-content: center; 
        align-items: center; padding: 10px;">
            <h1 style="font-size: 28px;" className="navbar-brand">SaveDuck</h1>
            <img src="rubduck.png" alt="rubber duck" width="33" style="padding-top: 10px;"/>
        </a>
        <menu className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
            <li className="nav-item"><a className="nav-link active" href="play.html">Play</a></li>
            <li className="nav-item"><a className="nav-link" href="high_scores.html">Score Board</a></li>
            <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
        </menu>
    </nav>
    </header>

    <main>
        Body goes here
    </main>
    <footer className="modal-footer">
        <div className="container-fluid">
            <a href="https://github.com/D-Talbot/startup">Github Startup Repo</a>
            <span>Author: Danica Talbot</span>
        </div>
    </footer>
</div>
  );
}

export default App;
