let { houseData } = require("../utility/housestore");
const fs = require("fs");
const path = require("path");
const rootdir = require("../utility/path_utils");
const { stringify } = require("querystring");
const { json } = require("body-parser");
module.exports = class Home {
  constructor(housename, price, location, rating) {
    ((this.housename = housename),
      (this.price = price),
      (this.location = location),
      (this.rating = rating));
  }
  save() {
    houseData.push(this);
    const pathfordata = path.join(rootdir, "data", "housedata.json");
    fs.writeFile(pathfordata, JSON.stringify(houseData), (err) => {
      console.log(err);
    });
  }
  static fetchall(callback) {
    const pathfordata = path.join(rootdir, "data", "housedata.json");

    fs.readFile(pathfordata, (err, data) => {
      if (err) {
        callback([]);
        return;
      }

      const houseData = JSON.parse(data.toString());
      callback(houseData);
    });
  }
};
