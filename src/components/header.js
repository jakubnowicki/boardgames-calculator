import React from "react";
import { Row } from "react-grid-system";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { setGameInStore } from "../actions/index.js";
import { connect } from "react-redux";

const games = require("../games.json");

const extract_games = games_json => {
  let games = [{ value: "custom", label: "Custom game" }];
  for (let key in games_json.games) {
    games = [...games, { value: key, label: games_json.games[key].name }];
  }
  return games;
};

const mapDispatchToProps = dispatch => {
  return {
    setGame: categories => dispatch(setGameInStore(categories))
  };
};

const SelectGame = props => {
  const { setGame } = props;
  const options = extract_games(games);
  const defaultOption = options[0];
  return (
    <Dropdown
      options={options}
      onChange={e => {
        if (e.value !== "custom") {
          setGame(games.games[e.value].categories);
        }
      }}
      value={defaultOption}
      placeholder="Select an option"
    />
  );
};

const SelectGameDropdown = connect(null, mapDispatchToProps)(SelectGame);

const Header = () => {
  return (
    <Row>
      <div className="header">
        <SelectGameDropdown />
      </div>
    </Row>
  );
};

export default Header;
