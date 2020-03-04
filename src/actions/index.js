export const updateScoreInput = (player, category, score) => ({
  type: 'UPDATE_SINGLE_SCORE',
  player: player,
  category: category,
  score: score
})

export const addPlayer = (player_name = "test_player") => ({
  type: 'ADD_PLAYER',
  player_name: player_name
})
