const express = require("express");
const hostrouter = express.Router();
const rootpath = require("../utility/path_utils");
const path = require("path");
const { houseData } = require("../utility/housestore");

hostrouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootpath, "views", "addhome.html"));
});

hostrouter.post("/add-home", (req, res, next) => {
  houseData.push({
    housename: req.body.housename,
    price: req.body.price,
    location: req.body.location,
    rating: req.body.rating,
  });
  console.log(req.body.housename);
  res.sendFile(path.join(rootpath, "views", "homeadded.html"));
});

exports.hostrouter = hostrouter;
exports.houseData = houseData;
