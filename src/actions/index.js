export const updateScoreInput = (player_id, category, score) => ({
  type: 'UPDATE_SINGLE_SCORE',
  player_id: player_id,
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

export const removeCategory = (category_id) => ({
  type: 'REMOVE_CATEGORY',
  category_id: category_id
})

export const updateCategoryName = (category_id, new_category_name) => ({
  type: 'CHANGE_CATEGORY_NAME',
  category_id: category_id,
  new_category_name: new_category_name
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

export const setBackgroundInStore = (background) => ({
  type: 'SET_BACKGROUND',
  background: background
})
