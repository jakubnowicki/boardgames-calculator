import React from "react";
import { Col } from "react-grid-system";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const { player } = ownProps;
  const score = state["updateSingleScore"].players[player].calculate_score();
  return {
    score: score
  };
};

const PlayerScore = props => {
  return <Col>{props.score}</Col>;
};

export default connect(mapStateToProps, null)(PlayerScore);
