import React from 'react';
import InputNumeric from './components/input.js';
import CategoryLabel from './components/category_label.js';
import PlayerName from './components/player_name.js';
import PlayerScore from './components/player_score.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <PlayerName/>
      <PlayerScore/>
      <CategoryLabel/>
      <InputNumeric/>
    </div>
  );
}

export default App;
