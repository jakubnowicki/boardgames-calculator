import Player from "./player.js";
import Category from "./category.js"

const scores = (state = [], action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      const player_count = ++state.player_count;
      const player_name = "Player_" + player_count;
      const new_player = new Player(player_name)
      return { ...state, players: [...state.players, new_player] };
    case "ADD_CATEGORY":
      const categories_count = ++state.categories_count;
      const category_name = "Category_" + categories_count;
      const new_category = new Category(category_name)
      return {
        ...state,
        categories: [...state.categories, new_category]
      };
    case "UPDATE_SINGLE_SCORE":
      const { player, category, score } = action;
      state.players.map(player_mapped => {
        if (player_mapped._player_id === player) {
          player_mapped.update_score(category["category"], score);
        }
        return null
      })
      return { ...state };
    case "CHANGE_CATEGORY_NAME":
      const { category_id, new_name } = action;
      state.categories.map(category => {
        if (category._id === category_id.category_id) {
          category.change_name(new_name)
        }
        return null
      })
      return {...state};
    case "CHANGE_PLAYER_NAME":
      const { player_id, new_player_name } = action;
      state.players.map(player => {
        if (player._player_id === player_id.id) {
          player.change_name(new_player_name)
        }
        return null
      })
      return {...state};
    default:
      return state;
  }
};

export default scores;
