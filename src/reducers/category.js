export default class Category {
  constructor(id) {
    this._id = id;
    this._name = id;
  }

  change_name(new_name) {
    this._name = new_name;
  }
}
