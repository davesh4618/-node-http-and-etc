const path = require("path");
const rootpath = require("../utility/path_utils");
const Home = require("../models/home.model");

exports.addhome = (req, res, next) => {
  res.render("edit-home", { pagetittle: "add home page" });
};
exports.adddata = (req, res, next) => {
  const { housename, price, location, rating } = req.body;
  const home = new Home(housename, price, location, rating);
  home.save();

  res.sendFile(path.join(rootpath, "views", "homeadded.html"));
};

exports.gethomes = (req, res, next) => {
  Home.fetchall().then(([rows]) => {
    res.render("home", { houseData: rows });
  });
};
exports.homedetail = (req, res, next) => {
  const id = Number(req.params.id);
  if (!id) {
    res.render("404");
  } else {
    Home.fetchall().then(([rows]) => {
      const home = rows.find((home) => home.id === id);
      res.render("homedetail", { home });
    });
  }
};

exports.getedithome = (req, res, next) => {
  const id = Number(req.params.id);
  Home.fetchall().then(([rows]) => {
    const home = rows.find((h) => h.id === id);
    if (!home) {
      return res.redirect("/");
    }
    res.render("edit-home", { pagetittle: "edit home page", home });
  });
};

exports.postedithome = (req, res, next) => {
  const id = req.params.id;
  const { housename, price, location, rating } = req.body;
  const home = new Home(housename, price, location, rating, id);
  home.save();
  res.redirect("/");
};

exports.deletehome = (req, res, next) => {
  const id = req.params.id;
  Home.deletebyid(id);
  res.redirect("/");
};
