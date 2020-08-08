import React from "react";
import { Col } from "react-grid-system";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const { player_id } = ownProps;
  const player = state.scores.players.filter(function(player) {
    return player._player_id === player_id;
  });
  const score = player[0].calculate_score();
  const winner = player[0]._winner;
  return {
    score: score,
    winner: winner
  };
};

const PlayerScore = props => {
  const classes = props.winner ? "player-score winner" : "player-score"
  return (
    <Col>
      <div className={classes}>{props.score}</div>
    </Col>
  );
};

export default connect(mapStateToProps, null)(PlayerScore);
