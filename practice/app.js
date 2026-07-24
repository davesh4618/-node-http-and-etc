const express = require("express");
const app = express();

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

  next();
});
app.get("/contact-us", (req, res, next) => {
  res.send(`<h1>Contact Us</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Name" />
    <input type="email" name="email" placeholder="Email" />
    <input type="submit" value="Submit" />
    `);
  next();
});

app.post("/contact-us", (req, res, next) => {
  res.send("Form submitted successfully");
  next();
});
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
