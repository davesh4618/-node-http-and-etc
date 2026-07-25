const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const contactrouter = require("./contact-us");
app.use((req, res, next) => {
  console.log(` req method - ${req.method}`);
  next();
});
app.use((req, res, next) => {
  console.log(` req url - ${req.url}`);
  next();
});

app.get("/", (req, res, next) => {
  console.log("/ route is working");
  res.send(`
  <a href ="/contact-us">contract us</a>
  `);
  next();
});

app.use(bodyParser.urlencoded());
app.use(contactrouter);
app.use((req, res, next) => {
  res.send(`<h1>error 404 not found </h1>`);
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
