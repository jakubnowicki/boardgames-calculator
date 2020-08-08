import React from "react";
import { Col } from "react-grid-system";
import { connect } from "react-redux";
import { updateCategoryName } from "../actions/index.js";
import NameLabel from "./name_label.js";

const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (category_id, new_category_name) =>
      dispatch(updateCategoryName(category_id, new_category_name)),
  };
};

const mapStateToProps = (state, ownProps) => {
  let name;
  state.scores.categories.map((category) => {
    if (category._id === ownProps.category_id) {
      name = category._name;
    }
    return null;
  });
  return {
    name: name,
    category_id: ownProps.category_id,
  };
};

const CategoryLabel = (props) => {
  const { name, category_id, updateName } = props;
  return (
    <Col>
      <NameLabel
        name={name}
        id={category_id}
        updateName={updateName}
        className="category-label"
      />
    </Col>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryLabel);
