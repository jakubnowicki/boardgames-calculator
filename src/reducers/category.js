export default class Category {
  constructor(id, name = null) {
    if (!name) {
      name = id;
    }
    this._id = id;
    this._name = name;
  }

  change_name(new_name) {
    this._name = new_name;
  }
}
