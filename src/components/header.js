import React from "react";
import { Row } from "react-grid-system";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { setGameInStore, setBackgroundInStore } from "../actions/index.js";
import { connect } from "react-redux";

const games = require("../games.json");

const extract_games = (games_json) => {
  let games = [];
  for (let key in games_json.games) {
    games = [...games, { value: key, label: games_json.games[key].name }];
  }
  return games;
};

const mapDispatchToProps = (dispatch) => {
  return {
    setGame: (categories) => dispatch(setGameInStore(categories)),
    setBackground: (background) => dispatch(setBackgroundInStore(background)),
  };
};

const SelectGame = (props) => {
  const { setGame, setBackground } = props;
  const options = extract_games(games);
  return (
    <Dropdown
      options={options}
      onChange={(e) => {
        if (e.value !== "custom") {
          setGame(games.games[e.value].categories);
          setBackground(games.games[e.value].background);
        }
      }}
      placeholder="Select predefined set of categories or create your own one"
    />
  );
};

const SelectGameDropdown = connect(null, mapDispatchToProps)(SelectGame);

const Header = () => {
  return (
    <Row className="header-row">
      <div className="header">
        <SelectGameDropdown />
      </div>
    </Row>
  );
};

export default Header;
