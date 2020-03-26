import React from "react";
import { Row, Col, Container } from "react-grid-system";
import AddPlayer from "./add_player.js";
import { connect } from "react-redux";
import { updatePlayerName } from "../actions/index.js";
import NameLabel from "./name_label.js"

const mapDispatchToProps = dispatch => {
  return {
    updateName: (player_id, new_name) =>
      dispatch(updatePlayerName(player_id, new_name))
  };
};

const mapStateToProps = (state, ownProps) => {
  let name;
  state.scores.players.map(player => {
    if (player._player_id === ownProps.id) {
      name = player._player_name;
    }
    return null;
  });
  return {
    name: name,
    id: ownProps.id
  };
};


const PlayerName = props => {
  const { name, id, updateName } = props;
  return (
    <Col>
      <NameLabel name={name} id={id} updateName={updateName} className="player-name"/>
    </Col>
  );
};

const PlayerNameLabel = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerName);

const PlayersRow = props => {
  const players = props.players;
  return (
    <Container fluid={true}>
      <Row>
        <Col></Col>
        {players.map(player => (
          <PlayerNameLabel key={player._player_id} id={player._player_id}/>
        ))}
        <Col sm={1} className="add-button">
          <AddPlayer />
        </Col>
      </Row>
    </Container>
  );
};

export default PlayersRow;
