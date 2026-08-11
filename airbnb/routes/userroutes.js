const express = require("express");
const userrouter = express.Router();

const { gethomes } = require("../controler/home");
userrouter.get("/", gethomes);

module.exports = userrouter;
