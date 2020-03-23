import React from 'react';
import { connect } from "react-redux";
import { addPlayer } from "../actions/index.js";

const mapDispatchToProps = (dispatch) => {
  return {
    addPlayer: () => dispatch(addPlayer())
  }
}


class AddPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button onClick={() => this.props.addPlayer()}>Add player</button>
  }
}

export default connect(null, mapDispatchToProps)(AddPlayer);
