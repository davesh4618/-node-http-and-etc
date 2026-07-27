const express = require("express");
const userrouter = express.Router();
const path = require("path");
const { houses } = require("./hostrouter");

userrouter.get("/", (req, res, next) => {
  console.log(houses);
  res.sendFile(path.join(__dirname, "../", "views", "home.html"));
});

module.exports = userrouter;
