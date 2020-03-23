import React from 'react';
import { connect } from "react-redux";
import { addCategory } from "../actions/index.js";

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: () => dispatch(addCategory())
  }
}


class AddCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button onClick={() => this.props.addCategory()}>Add category</button>
  }
}

export default connect(null, mapDispatchToProps)(AddCategory);
