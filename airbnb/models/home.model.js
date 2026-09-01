const pool = require("../utility/databas.utils");

module.exports = class Home {
  constructor(housename, price, location, rating, id) {
    this.housename = housename;
    this.price = price;
    this.location = location;
    this.rating = rating;
    if (id) this.id = id;
  }

  save() {
    if (this.id) {
      // Editing an existing home
      return pool.execute(
        "UPDATE homes SET housename = ?, price = ?, location = ?, rating = ? WHERE id = ?",
        [this.housename, this.price, this.location, this.rating, this.id],
      );
    } else {
      // Adding a new home — let MySQL auto-generate the id
      return pool.execute(
        "INSERT INTO homes (housename, price, location, rating) VALUES (?, ?, ?, ?)",
        [this.housename, this.price, this.location, this.rating],
      );
    }
  }

  static fetchall() {
    return pool.execute("SELECT * FROM homes");
  }

  static deletebyid(id) {
    return pool.execute("DELETE FROM homes WHERE id = ?", [id]);
  }
};
