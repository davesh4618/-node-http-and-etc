const express = require("express");
const userrouter = express.Router();
const path = require("path");




userrouter.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "home.html"));
});



module.exports = userrouter;
