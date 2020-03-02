import Player from './player.js'


const initState = {
  players: {Player_1: new Player("Player_1"), Player_2: new Player("Player_2"), Player_3: new Player("Player_3")}
}

const updateSingleScore = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_SINGLE_SCORE':
      const { player, category, score } = action;
      state.players[player["player"]].update_score(category["category"], score);
      return { players: state.players }
    default:
      return state
  }
};

export default updateSingleScore;
