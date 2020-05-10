import Player from "./player.js";
import Category from "./category.js";

const scores = (state = [], action) => {
  const {
    category_id,
    category,
    score,
    new_category_name,
    player_id,
    new_player_name,
    categories,
    background
  } = action;
  switch (action.type) {
    case "ADD_PLAYER":
      const player_count = ++state.player_count;
      const player_name = "Player_" + player_count;
      const new_player = new Player(player_name);
      return { ...state, players: [...state.players, new_player] };
    case "ADD_CATEGORY":
      const categories_count = ++state.categories_count;
      const category_name = "Category_" + categories_count;
      const new_category = new Category(category_name);
      return {
        ...state,
        categories: [...state.categories, new_category]
      };
    case "REMOVE_CATEGORY":
      const updated_categories = state.categories.filter(category => {
        return category._id !== category_id;
      });
      return {
        ...state,
        categories: updated_categories
      };
    case "UPDATE_SINGLE_SCORE":
      state.players.map(player_mapped => {
        if (player_mapped._player_id === player_id) {
          player_mapped.update_score(category["category"], score);
        }
        return null;
      });
      return { ...state };
    case "CHANGE_CATEGORY_NAME":
      state.categories.map(category => {
        if (category._id === category_id.id) {
          category.change_name(new_category_name);
        }
        return null;
      });
      return { ...state };
    case "CHANGE_PLAYER_NAME":
      state.players.map(player => {
        if (player._player_id === player_id.id) {
          player.change_name(new_player_name);
        }
        return null;
      });
      return { ...state };
    case "SET_GAME":
      state.categories_count = 0;
      const categories_set = categories.map(category => {
        ++state.categories_count;
        return new Category("Category_" + state.categories_count, category);
      });
      return {
        ...state,
        categories: categories_set
      };
    case "SET_BACKGROUND":
      return {
        ...state,
        background: background
      }
    default:
      return state;
  }
};

export default scores;
