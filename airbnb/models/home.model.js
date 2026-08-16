const fs = require("fs");
const path = require("path");
const rootdir = require("../utility/path_utils");

module.exports = class Home {
  constructor(housename, price, location, rating, id) {
    this.housename = housename;
    this.price = price;
    this.location = location;
    this.rating = rating;
    if (id) this.id = id;
  }

  save() {
    const pathfordata = path.join(rootdir, "data", "housedata.json");

    Home.fetchall((houseData) => {
      if (this.id) {
        const existingHomeIndex = houseData.findIndex(
          (home) => home.id === this.id
        );
        if (existingHomeIndex >= 0) {
          houseData[existingHomeIndex] = this;
        } else {
          houseData.push(this);
        }
      } else {
        this.id = Math.random().toString();
        houseData.push(this);
      }

      fs.writeFile(pathfordata, JSON.stringify(houseData), (err) => {
        if (err) console.log(err);
      });
    });
  }

  static fetchall(callback) {
    const pathfordata = path.join(rootdir, "data", "housedata.json");
    fs.readFile(pathfordata, (err, data) => {
      if (err) {
        callback([]);
        return;
      }
      callback(JSON.parse(data.toString()));
    });
  }

  static deletebyid(id) {
    const pathfordata = path.join(rootdir, "data", "housedata.json");
    Home.fetchall((houseData) => {
      const updatedHouseData = houseData.filter((home) => home.id !== id);
      fs.writeFile(pathfordata, JSON.stringify(updatedHouseData), (err) => {
        if (err) console.log(err);
      });
    });
  }
};