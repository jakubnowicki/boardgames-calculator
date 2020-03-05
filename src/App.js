import React from "react";
import AppContent from './components/app_content.js'
import "./App.css";
import rootReducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Player from "./reducers/player.js";

const store = createStore(
  rootReducer,
  {
    players: {
      player_count: 2,
      Player_1: new Player("Player_1"),
      Player_2: new Player("Player_2")
    }
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  const categories = ["Category_1", "Category_2", "Category_3"];

  return (
    <Provider store={store}>
      <AppContent categories={categories} />
    </Provider>
  );
}


export default App;
