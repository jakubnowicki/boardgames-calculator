import React from 'react';
import { Row, Col, Container } from 'react-grid-system';
import PlayerScore from './player_score.js'

const PlayerScoreRow = (props) => {
  const players = props.players;
  return (
    <Container fluid={true}>
      <Row>
        <Col></Col>
        {players.map((player) => <PlayerScore player={player}/>)}
      </Row>
    </Container>
  )
}

export default PlayerScoreRow;
