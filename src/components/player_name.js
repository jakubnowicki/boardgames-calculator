import React from 'react';
import { Row, Col, Container } from 'react-grid-system';
import AddPlayer from './add_player.js';

const PlayerName = (props) => {
  return <Col>{ props.name }</Col>;
};

const PlayersRow = (props) => {

  const players = props.players;
  return (
    <Container fluid={true}>
      <Row>
        <Col></Col>
        {players.map(player => <PlayerName key={player._player_id} name={player._player_name}/>)}
        <Col><AddPlayer/></Col>
      </Row>
    </Container>
  )
}

export default PlayersRow;
