export const updateScoreInput = (player, category, score) => ({
  type: 'UPDATE_SINGLE_SCORE',
  player: player,
  category: category,
  score: score
})
