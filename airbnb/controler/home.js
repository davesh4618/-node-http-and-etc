const path = require("path");
const rootpath = require("../utility/path_utils");
const Home = require("../models/home.model");

exports.addhome = (req, res, next) => {
  res.render("addhome", { pagetittle: "add home page" });
};
exports.adddata = (req, res, next) => {
  const { housename, price, location, rating } = req.body;
  const home = new Home(housename, price, location, rating);
  home.save();

  res.sendFile(path.join(rootpath, "views", "homeadded.html"));
};

exports.gethomes = (req, res, next) => {
  Home.fetchall((houseData) => {
    res.render("home", { houseData });
  });
};
