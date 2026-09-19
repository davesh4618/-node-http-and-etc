const express = require("express");
const authrouter = express.Router();

const { authcontroler } = require("../controler/authcontroler.js");
const { authpostcontroler } = require("../controler/authcontroler.js");
authrouter.get("/login", authcontroler);
authrouter.post("/login", authpostcontroler);

module.exports = authrouter;
