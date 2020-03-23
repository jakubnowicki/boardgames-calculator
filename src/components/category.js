import React from 'react';
import { Row, Col, Container } from 'react-grid-system';
import CategoryScore from "./category_score.js";
import AddCategory from "./add_category.js"


const CategoryLabel = (props) => {
  return <Col>{props.name}</Col>;
};

const CategoryRow = (props) => {
  const {players, category_name } = props;

  return (
    <Container fluid={true}>
      <Row>
        <CategoryLabel name={category_name}/>
        {players.map((player) => <CategoryScore player={player} category={category_name}/>)}
        <Col/>
      </Row>
    </Container>
  )
};

const CategoriesPointsSection = (props) => {
  const  { categories, players } = props;

  return (
    <Container fluid={true}>
      {categories.map((category) => <CategoryRow players={players} category_name={category}/>)}
      <Row><AddCategory/></Row>
    </Container>
  )
}

export default CategoriesPointsSection;
