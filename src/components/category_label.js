import React from "react";
import { Col } from "react-grid-system";
import Popup from "reactjs-popup";
import { connect } from "react-redux";
import { updateCategoryName } from "../actions/index.js";

const mapDispatchToProps = dispatch => {
  return {
    updateName: (category_id, new_name) =>
      dispatch(updateCategoryName(category_id, new_name))
  };
};

const mapStateToProps = (state, ownProps) => {
  let name;
  state.scores.categories.map(category => {
    if (category._id === ownProps.category_id) {
      name = category._name;
    }
    return null
  });
  return {
    name: name,
    category_id: ownProps.category_id
  };
};


const CategoryLabel = props => {
  const { name, category_id, updateName } = props;
  return (
    <Col>
      <Popup trigger={<button>{name}</button>} modal closeOnDocumentClick>
        <input type="text" value={name} onChange={e => updateName({ category_id }, e.target.value)} />
      </Popup>
    </Col>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryLabel);
