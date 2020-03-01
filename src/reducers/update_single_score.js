class Player {
  constructor(name) {
    this._player_name = name;
    this._categories_scores = {};
  }

  update_score(category, score) {
    this._categories_scores[category] = score
  }
}


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
