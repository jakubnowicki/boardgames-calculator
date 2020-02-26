import React from 'react';
import { Row, Col, Container } from 'react-grid-system';


const CategoryLabel = (props) => {
  return <Col>{props.name}</Col>;
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


const CategoryRow = (props) => {
  const {players, category_name } = props;

  return (
    <Container fluid={true}>
      <Row>
        <CategoryLabel name={category_name}/>
        {players.map(() => <CategoryInput/>)}
      </Row>
    </Container>
  )
};

const CategoriesPointsSection = (props) => {
  const  { categories, players } = props;

  return (
    <Container fluid={true}>
      {categories.map((category) => <CategoryRow players={players} category_name={category}/>)}
    </Container>
  )
}

export default CategoriesPointsSection;
