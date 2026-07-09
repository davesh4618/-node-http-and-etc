const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("come i first middleware", req.url, req.method);
  next();
});

app.use("/user", (req, res, next) => {
  console.log("come in second middle ware", req.url, req.method);
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});
app.get("/user", (req, res) => {
  res.send("<h1>hello from user route</h1>");
});

const port = 3000;
app.listen(3000, () => {
  console.log("server is listening a port 3000");
});
