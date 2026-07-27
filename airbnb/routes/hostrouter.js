const express = require("express");
const hostrouter = express.Router();
const rootpath = require("../utility/path_utils");
const path = require("path");

hostrouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootpath, "views", "addhome.html"));
});

const houses = [];
hostrouter.post("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootpath, "views", "homeadded.html"));
  houses.push({ housename: req.body.housename });
  console.log(req.body.housename);
});
exports.hostrouter = hostrouter;
exports.houses = houses
