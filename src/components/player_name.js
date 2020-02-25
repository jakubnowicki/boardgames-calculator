import React from 'react';
import { Row, Col, Container } from 'react-grid-system';

const PlayerName = (props) => {
  return <Col>{ props.name }</Col>;
};

const PlayersRow = (props) => {

  const players = props.players;
  return (
    <Container fluid={true}>
      <Row>
        <Col></Col>
        {players.map(player => <PlayerName name={player}/>)}
      </Row>
    </Container>
  )
}

export default PlayersRow;
