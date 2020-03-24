import React from "react";
import { Row, Col, Container } from "react-grid-system";
import CategoryScore from "./category_score.js";
import AddCategory from "./add_category.js";
import CategoryLabel from "./category_label.js";

const CategoryRow = props => {
  const { players, category_name, category_id } = props;

  return (
    <Container fluid={true}>
      <Row>
        <CategoryLabel name={category_name} category_id={category_id}/>
        {players.map(player => (
          <CategoryScore player={player} category={category_id} />
        ))}
        <Col />
      </Row>
    </Container>
  );
};

const CategoriesPointsSection = props => {
  const { categories, players } = props;

  return (
    <Container fluid={true}>
      {categories.map(category => (
        <CategoryRow
          players={players}
          category_name={category._name}
          category_id={category._id}
        />
      ))}
      <Row>
        <Col>
          <AddCategory />
        </Col>
      </Row>
    </Container>
  );
};

export default CategoriesPointsSection;
