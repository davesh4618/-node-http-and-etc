const express = require("express");
const contactrouter = express.Router();
const path = require("path");
contactrouter.get("/contact-us", (req, res, next) => {
 
res.sendFile(path.join(__dirname, "views", "contactus.html"));
  
 
});

contactrouter.post("/contact-us", (req, res, next) => {
  res.send("Form submitted successfully");
  console.log(req.body);
  next();
});

module.exports = contactrouter;
