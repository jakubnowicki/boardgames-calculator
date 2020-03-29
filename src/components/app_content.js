import React from "react";
import { connect } from "react-redux";
import CategoriesPointsSection from "./category.js";
import PlayersRow from "./player_name.js";
import PlayerScoreRow from "./scores.js";
import Header from "./header.js";

const mapStateToProps = (state) => {
  const categories = state.scores.categories
  const players = state.scores.players
  return {
    players: players,
    categories: categories
  };
};

const AppContent = (props) => {
  const { players, categories } = props;

  return (
    <div className="App">
      <Header/>
      <PlayersRow players={players} />
      <PlayerScoreRow players={players} />
      <CategoriesPointsSection players={players} categories={categories} />
    </div>
  )
}


export default connect(mapStateToProps, null)(AppContent);
