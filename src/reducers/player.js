import { sumValues } from '../utils/utils.js';

export default class Player {
  constructor(name) {
    this._player_name = name;
    this._categories_scores = {};
  }

  update_score(category, score) {
    this._categories_scores[category] = score
  }

  calculate_score() {
    return sumValues(this._categories_scores)
  }
}
