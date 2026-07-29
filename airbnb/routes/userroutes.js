const express = require("express");
const userrouter = express.Router();
const { houseData } = require("../utility/housestore");

userrouter.get("/", (req, res, next) => {
  res.render("home", { houseData });
});

module.exports = userrouter;
