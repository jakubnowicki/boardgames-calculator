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

export const addCategory = () => ({
  type: 'ADD_CATEGORY'
})

export const updateCategoryName = (category_id, new_name) => ({
  type: 'CHANGE_CATEGORY_NAME',
  category_id: category_id,
  new_name: new_name
})

export const updatePlayerName = (player_id, new_player_name) => ({
  type: 'CHANGE_PLAYER_NAME',
  player_id: player_id,
  new_player_name: new_player_name
})

export const setGameInStore = (categories) => ({
  type: 'SET_GAME',
  categories: categories
})
