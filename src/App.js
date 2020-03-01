import React from 'react';
import CategoriesPointsSection from './components/category.js';
import PlayersRow from './components/player_name.js';
import PlayerScoreRow from './components/player_score.js';
import './App.css';
import rootReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  const players = ["Player_1", "Player_2", "Player_3"]
  const categories = ["Category_1", "Category_2", "Category_3"]

  return (
    <Provider store={store}>
      <div className="App">
        <PlayersRow players = {players}/>
        <PlayerScoreRow players={players}/>
        <CategoriesPointsSection players={players} categories={categories}/>
      </div>
    </Provider>
  );
}

export default App;
