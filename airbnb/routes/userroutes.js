const express = require("express");
const userrouter = express.Router();

const { gethomes } = require("../controler/home");
const { homedetail } = require("../controler/home");
userrouter.get("/", gethomes);
userrouter.get("/home/:id",homedetail)

module.exports = userrouter;
