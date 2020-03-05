import React from "react";
import { connect } from "react-redux";
import CategoriesPointsSection from "./category.js";
import PlayersRow from "./player_name.js";
import PlayerScoreRow from "./scores.js";

const mapStateToProps = (state) => {
  const players = state.players
  let item;
  let players_list = []
  for (item in players) {
    if (players[item].constructor.name === "Player") {
      players_list.push(item)
    }
  }
  return {
    players: players_list
  };
};

const AppContent = (props) => {
  const { players, categories } = props;

  return (
    <div className="App">
      <PlayersRow players={players} />
      <PlayerScoreRow players={players} />
      <CategoriesPointsSection players={players} categories={categories} />
    </div>
  )
}


export default connect(mapStateToProps, null)(AppContent);
