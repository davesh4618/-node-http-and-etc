const express = require("express");
const hostrouter = express.Router();

const path = require("path");

hostrouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "addhome.html"));
});
hostrouter.post("/add-home", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "homeadded.html"));
  console.log(req.body);
});

module.exports = hostrouter;
