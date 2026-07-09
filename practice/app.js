const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use("/", (req, res, next) => {
  console.log("dummy middleware 1 - ", req.url);
  next();
});
app.use("/", (req, res, next) => {
  console.log("dummy middleware 2 - ", req.method);
  next();
});
// app.use("/", (req, res) => {
//   console.log("dummy middleware 3");

//   res.send("<h1>hello from express</h1>");
// });

app.get("/", (req, res) => {
  res.send("<h1>hello from express</h1> <a href='/contact-us'>contact us</a>");
  console.log("dummy middleware 3 - ", req.method);
});

app.use(bodyParser.urlencoded());
app.get("/contact-us", (req, res) => {
  res.send(`
  <form action="/contact-us" method="POST">
  <input type="text" name="name" placeholder="enter your name" />
  <input type="email" name="email" placeholder="enter your email" />
  <button type="submit">submit</button>
  </form>
    `);
  console.log("dummy middleware 4 /contact-us - ", req.method);
});

app.post("/contact-us", (req, res) => {
  res.send(
    `<h1>form submitted we will get back to you soon  ${req.body.name} on your email : ${req.body.email}</h1>`,
  );
  console.log("dummy middleware 5 /contact-us - ", req.method, req.body);
});
app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
