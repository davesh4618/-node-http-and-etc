const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  res.send("Hello World");
  next();
});
app.use("/user", (req, res, next) => {
  res.send("User route");
});
app.listen(4000, () => {
  console.log(`Server is running on http://localhost:${4000}`);
});
