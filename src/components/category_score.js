import React from 'react';
import { Col } from 'react-grid-system';
import { updateScoreInput } from '../actions/index.js';
import { connect } from "react-redux";


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
    this.props.updateScore(player.player._player_id, category, score)
  }

  render() {
    const { value } = this.state;
    let { player, category } = this.props;
    return (
      <Col className="category-score">
        <input type="number" value={value} onChange={(e) => this.adjustValue(e, player={player}, category={category})}/>
      </Col>
    )
  }
};

export default connect(
  null,
  mapDispatchToProps
)(CategoryInput)
