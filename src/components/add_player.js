import React from "react";
import { connect } from "react-redux";
import { addPlayer } from "../actions/index.js";

const mapDispatchToProps = (dispatch) => {
  return {
    addPlayer: () => dispatch(addPlayer()),
  };
};

const AddPlayer = (props) => {
  return <button onClick={() => props.addPlayer()}>+</button>;
};

export default connect(null, mapDispatchToProps)(AddPlayer);
