import React from 'react';
import { Col } from 'react-grid-system';
import { updateScoreInput, getPlayerCategoryScore } from '../actions/index.js';
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const { player, category } = ownProps;
  const score = getPlayerCategoryScore(player, category);
  return {score: score}
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateScore: (player, category, score) => dispatch(updateScoreInput(player, category, score))
  }
}

class CategoryInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
  }

  adjustValue(v, player, category) {
    const score = v.target.value;
    this.setState({
      value: score
    });
    this.props.updateScore(player, category, score)
  }

  render() {
    const { value } = this.state;
    let { player, category, score } = this.props;
    return (
      <Col>
      <div>{score}</div>
        <input type="number" value={value} onChange={(e) => this.adjustValue(e, player={player}, category={category})}/>
      </Col>
    )
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryInput)
