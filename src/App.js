import React from 'react';
import Category from './components/category.js';
import PlayersRow from './components/player_name.js';
import PlayerScoreRow from './components/player_score.js';
import './App.css';

function App() {
  const players = ["Player 1", "Player 2", "Player 3"]

  return (
    <div className="App">
      <PlayersRow players = {players}/>
      <PlayerScoreRow players={players}/>
      <Category players={players}/>
    </div>
  );
}

export default App;
