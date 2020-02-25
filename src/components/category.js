import React from 'react';
import { Row, Col, Container } from 'react-grid-system';


const CategoryLabel = () => {
  return <Col>Category</Col>;
};

class CategoryInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
  }

  adjustValue(v) {
    this.setState({
      value: v.target.value
    });
  }

  render() {
    const { value } = this.state;
    return (
      <Col>
        <input type="number" value={value} onChange={(e) => this.adjustValue(e)}/>
      </Col>
    )
  }
};


const Category = (props) => {
  const players = props.players;

  return (
    <Container fluid={true}>
      <Row>
        <CategoryLabel/>
        {players.map(() => <CategoryInput/>)}
      </Row>
    </Container>
  )
};

export default Category;
