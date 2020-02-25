import React from 'react';
import { Row, Col, Container } from 'react-grid-system';

const PlayerScore = (props) => {
  return <Col>{props.score}</Col>;
};

const PlayerScoreRow = (props) => {
  const players = props.players;
  return (
    <Container fluid={true}>
      <Row>
        <Col></Col>
        {players.map(() => <PlayerScore score={0}/>)}
      </Row>
    </Container>
  )
}

export default PlayerScoreRow;
