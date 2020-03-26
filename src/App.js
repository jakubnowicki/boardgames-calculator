import React from "react";
import AppContent from "./components/app_content.js";
import "./style/App.scss";
import rootReducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Player from "./reducers/player.js";
import Category from "./reducers/category.js";

const store = createStore(
  rootReducer,
  {
    scores: {
      player_count: 2,
      categories_count: 2,
      categories: [new Category("Category_1"), new Category("Category_2")],
      players: [new Player("Player_1"), new Player("Player_2")]
    }
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
