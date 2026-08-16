const express = require("express");
const hostrouter = express.Router();
const rootpath = require("../utility/path_utils");
const path = require("path");
const { addhome } = require("../controler/home");
const { getedithome } = require("../controler/home");
const { adddata } = require("../controler/home");
const { postedithome } = require("../controler/home");
const { deletehome } = require("../controler/home");
hostrouter.get("/add-home", addhome);

hostrouter.post("/add-home", adddata);
hostrouter.get("/edit-homes/:id", getedithome);
hostrouter.post("/edit-homes/:id", postedithome);
hostrouter.post("/delete-home/:id", deletehome);
exports.hostrouter = hostrouter;
