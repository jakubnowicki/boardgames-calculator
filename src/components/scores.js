import React from 'react';
import { Row, Col, Container } from 'react-grid-system';
import PlayerScore from './player_score.js'

const PlayerScoreRow = (props) => {
  const players = props.players;
  return (
    <Container fluid={true}>
      <Row>
        <Col/>
        {players.map((player) => <PlayerScore key={player._player_id} player_id={player._player_id}/>)}
        <Col/>
      </Row>
    </Container>
  )
}

export default PlayerScoreRow;
