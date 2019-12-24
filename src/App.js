import React from 'react';
import spinner from './Spinner_Horse_Race_Game.png';
import './App.css';
import Wheel from 'lottery-wheel/dist/lottery-wheel';
import anime from 'animejs/lib/anime.es.js';

const prizes = [];

for (let i = 0; i++; i < 6) {
  for (let j of [2, 3, 5, 3, 2]) {
    prizes.push(`${i}:${j}`)
  }
}

window.delay = 8000;

let counter = 0;

function getNewRotations() {
  return counter += Math.random() * 3 + 1
}

function spin() {
  anime({
    targets: '#wheel',
    rotate: `${getNewRotations()}turn`,
    duration: window.delay || 8000,
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{margin: 0, padding: 0, transform: "translate(0, 2vh)"}}>↓</p>
        <img id="wheel" src={spinner} className="App-logo" alt="logo" />
        <button onClick={spin}>Spin</button>
      </header>
    </div>
  );
}

export default App;
