import React from "react";
import { Col } from "react-grid-system";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const { player_id } = ownProps;
  const player = state.scores.players.filter(function(player) {
    return player._player_id === player_id;
  });
  const score = player[0].calculate_score();
  return {
    score: score
  };
};

const PlayerScore = props => {
  return <Col>{props.score}</Col>;
};

export default connect(mapStateToProps, null)(PlayerScore);
