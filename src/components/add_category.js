import React from "react";
import { connect } from "react-redux";
import { addCategory } from "../actions/index.js";

const mapDispatchToProps = dispatch => {
  return {
    addCategory: () => dispatch(addCategory())
  };
};

const AddCategory = props => {
  return <button onClick={() => props.addCategory()}>+</button>;
};

export default connect(null, mapDispatchToProps)(AddCategory);
