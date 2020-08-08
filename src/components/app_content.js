import React from "react";
import { connect } from "react-redux";
import CategoriesPointsSection from "./category.js";
import PlayersRow from "./player_name.js";
import PlayerScoreRow from "./scores.js";
import Header from "./header.js";

const mapStateToProps = (state) => {
  const categories = state.scores.categories;
  const players = state.scores.players;
  const background = state.scores.background;
  return {
    players: players,
    categories: categories,
    background: background,
  };
};

const AppContent = (props) => {
  const { players, categories, background } = props;
  const background_url = background ? "url('" + background + "')" : "url()";
  const style = {
    backgroundImage: background_url,
  };
  return (
    <div className="App" style={style}>
      <div className="overlay"></div>
      <Header />
      <PlayersRow players={players} />
      <PlayerScoreRow players={players} />
      <CategoriesPointsSection players={players} categories={categories} />
    </div>
  );
};

export default connect(mapStateToProps, null)(AppContent);
