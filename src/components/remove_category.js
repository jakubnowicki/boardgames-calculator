import React from "react";
import { connect } from "react-redux";
import { removeCategory } from "../actions/index.js";

const mapDispatchToProps = (dispatch) => {
  return {
    removeCategory: (category_id) => dispatch(removeCategory(category_id)),
  };
};

const RemoveCategory = (props) => {
  const { category_id, removeCategory } = props;
  return <button onClick={() => removeCategory(category_id)}>-</button>;
};

export default connect(null, mapDispatchToProps)(RemoveCategory);
