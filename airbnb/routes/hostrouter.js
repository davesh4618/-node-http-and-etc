const express = require("express");
const hostrouter = express.Router();
const rootpath = require("../utility/path_utils");
const path = require("path");

hostrouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootpath, "views", "addhome.html"));
});
hostrouter.post("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootpath, "views", "homeadded.html"));
  console.log(req.body);
});

module.exports = hostrouter;
