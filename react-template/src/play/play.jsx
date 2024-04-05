import React from 'react';
import './play.css';

import hang2 from '../../public/hang2.png';

export function Play() {
  return (
    <main>
    <div className="block">
        <p className="players">Duck Rescuer: <span id="player-name"></span> </p>
        <label className="form-label" for="count">Guesses Left:</label>
        <input className="form-control" type="number" id="count" value="9" readonly/>
        <div id="player-messages"></div>
    </div>
    <div>
        
        <div className="left-side" style={{paddingLeft: "20px"}}>    
                <div className="wrap">
                    <img src={hang2} alt="hang" width="500"/>
                </div>
        </div>
        <div id="word-display">
            <h1 id="underscores">_ _ _ _ _ _ _ _</h1>
        </div>
        <div className="right-side">
            <h2>Alphabet</h2>
            <div id="buttons">
                <button id="a-button" onclick="addLetter('A', 'a-button')">A</button>
                <button id="b-button" onclick="addLetter('B', 'b-button')">B</button>
                <button id="c-button" onclick="addLetter('C', 'c-button')">C</button>
                <button id="d-button" onclick="addLetter('D', 'd-button')">D</button>
                <button id="e-button" onclick="addLetter('E', 'e-button')">E</button>
                <button id="f-button" onclick="addLetter('F', 'f-button')">F</button>
                <button id="g-button" onclick="addLetter('G', 'g-button')">G</button>
                <button id="h-button" onclick="addLetter('H', 'h-button')">H</button>
                <button id="i-button" onclick="addLetter('I', 'i-button')">I</button>
                <button id="j-button" onclick="addLetter('J', 'j-button')">J</button>
                <button id="k-button" onclick="addLetter('K', 'k-button')">K</button>
                <button id="l-button" onclick="addLetter('L', 'l-button')">L</button>
                <button id="m-button" onclick="addLetter('M', 'm-button')">M</button>
                <button id="n-button" onclick="addLetter('N', 'n-button')">N</button>
                <button id="o-button" onclick="addLetter('O', 'o-button')">O</button>
                <button id="p-button" onclick="addLetter('P', 'p-button')">P</button>
                <button id="q-button" onclick="addLetter('Q', 'q-button')">Q</button>
                <button id="r-button" onclick="addLetter('R', 'r-button')">R</button>
                <button id="s-button" onclick="addLetter('S', 's-button')">S</button>
                <button id="t-button" onclick="addLetter('T', 't-button')">T</button>
                <button id="u-button" onclick="addLetter('U', 'u-button')">U</button>
                <button id="v-button" onclick="addLetter('V', 'v-button')">V</button>
                <button id="w-button" onclick="addLetter('W', 'w-button')">W</button>
                <button id="x-button" onclick="addLetter('X', 'x-button')">X</button>
                <button id="y-button" onclick="addLetter('Y', 'y-button')">Y</button>
                <button id="z-button" onclick="addLetter('Z', 'z-button')">Z</button>

            </div>
    
            <button style={{width: "72px"}} id="reset-button" onclick="reset()" className="button-primary">Reset</button>
        </div>
    </div>
</main>
  );
}