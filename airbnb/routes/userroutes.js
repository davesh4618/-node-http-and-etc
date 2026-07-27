const express = require("express");
const userrouter = express.Router();
const path = require("path");
const { houses } = require("./hostrouter");

userrouter.get("/", (req, res, next) => {
  console.log(houses);
  res.render("home.ejs", { houses: houses });
});

module.exports = userrouter;
