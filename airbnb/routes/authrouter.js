const express = require("express");
const authrouter = express.Router();

const { authcontroler } = require("../controler/authcontroler.js");
const { authpostcontroler } = require("../controler/authcontroler.js");
const { logoutconstroler } = require("../controler/authcontroler.js");
const { signupcontroler } = require("../controler/authcontroler.js");
authrouter.get("/login", authcontroler);
authrouter.post("/login", authpostcontroler);
authrouter.post("/logout", logoutconstroler);
authrouter.get("/signup", signupcontroler);
module.exports = authrouter;
