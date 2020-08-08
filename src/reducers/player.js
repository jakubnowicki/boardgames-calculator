import { sumValues } from "../utils/utils.js";

export default class Player {
  constructor(name, id = null) {
    if (!id) {
      id = name;
    }
    this._player_name = name;
    this._player_id = id;
    this._categories_scores = {};
    this._player_score = 0;
    this._winner = false;
  }

  update_score(category, score) {
    this._categories_scores[category] = score;
    this._player_score = sumValues(this._categories_scores);
  }

  change_name(new_name) {
    this._player_name = new_name;
  }

  calculate_score() {
    return this._player_score;
  }
}
