import React from "react";
import { Row, Col, Container } from "react-grid-system";
import CategoryScore from "./category_score.js";
import AddCategory from "./add_category.js";
import CategoryLabel from "./category_label.js";
import RemoveCategory from "./remove_category.js"

const CategoryRow = props => {
  const { players, category_name, category_id } = props;

  return (
    <Container fluid={true}>
      <Row>
        <CategoryLabel name={category_name} category_id={category_id}/>
        {players.map(player => (
          <CategoryScore key={player._player_id} player={player} category={category_id} />
        ))}
        <Col sm={1} className="add-button">
          <RemoveCategory category_id={category_id}/>
        </Col>
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
          key={category._id}
          players={players}
          category_name={category._name}
          category_id={category._id}
        />
      ))}
      <Row>
        <Col className="add-button">
          <AddCategory />
        </Col>
      </Row>
    </Container>
  );
};

export default CategoriesPointsSection;
