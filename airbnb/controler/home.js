const path = require("path");
const rootpath = require("../utility/path_utils");
const Home = require("../models/home.model");

exports.addhome = (req, res, next) => {
  res.render("edit-home", { pagetittle: "add home page" });
};
exports.adddata = (req, res, next) => {
  const { housename, price, location, rating } = req.body;
  const home = new Home({ housename, price, location, rating });
  home.save().then(() => {
    console.log("Home added successfully");
  });

  res.sendFile(path.join(rootpath, "views", "homeadded.html"));
};

exports.gethomes = (req, res, next) => {
  Home.find().then((rows) => {
    res.render("home", { houseData: rows });
  });
};
exports.homedetail = (req, res, next) => {
  const id = req.params.id;

  Home.find().then((rows) => {
    const home = rows.find((home) => home._id.toString() === id);

    if (!home) {
      return res.render("404");
    }

    res.render("homedetail", { home });
  });
};

exports.getedithome = (req, res, next) => {
  const id = req.params.id;
  Home.find().then((rows) => {
    const home = rows.find((h) => h._id.toString() === id);
    if (!home) {
      return res.redirect("/");
    }
    res.render("edit-home", { pagetittle: "edit home page", home });
  });
};

exports.postedithome = (req, res, next) => {
  const id = req.params.id;
  const { housename, price, location, rating } = req.body;
  Home.findById(id).then((home) => {
    home.housename = housename;
    home.price = price;
    home.location = location;
    home.rating = rating;
    home.save().then((result) => {
      console.log("Home updated successfully");
    });
    res.redirect("/");
  });
};

exports.deletehome = (req, res, next) => {
  const id = req.params.id;
  Home.findByIdAndDelete(id).then(() => {
    console.log("Home deleted successfully");
  });
  res.redirect("/");
};
