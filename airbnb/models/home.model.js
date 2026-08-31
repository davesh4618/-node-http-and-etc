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
    
  }

  static fetchall() {
    return pool.execute("SELECT * FROM homes");
  }

  static deletebyid(id) {}
};
