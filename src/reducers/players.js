import Player from "./player.js";

const players = (state = [], action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      const player_count = ++state.player_count;
      const player_name = "Player_" + player_count;
      state[player_name] = new Player(player_name);
      return { ...state };
    case "ADD_CATEGORY":
      const categories_count = ++state.categories_count;
      const category_name = "Category_" + categories_count;
      return {
        ...state,
        categories: [...state.categories, category_name]
      };
    case "UPDATE_SINGLE_SCORE":
      const { player, category, score } = action;
      state[player.player].update_score(category["category"], score);
      return { ...state };
    default:
      return state;
  }
};

export default players;
