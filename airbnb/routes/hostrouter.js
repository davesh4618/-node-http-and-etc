const express = require("express");
const hostrouter = express.Router();
const rootpath = require("../utility/path_utils");
const path = require("path");
const { addhome } = require("../controler/home");
const { getedithome } = require("../controler/home");
const { adddata } = require("../controler/home");
hostrouter.get("/add-home", addhome);

hostrouter.post("/add-home", adddata);
hostrouter.get("/edit-homes/:id", getedithome);

exports.hostrouter = hostrouter;
