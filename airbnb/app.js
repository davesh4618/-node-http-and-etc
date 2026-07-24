const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  console.log(`Request method: ${req.method}`);
  next();
});

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res, next) => {
  res.send(`<h1>Welcome to Airbnb</h1><a href ="/add-home">Add Home</a> `);
  next();
});

app.get("/add-home", (req, res, next) => {
  res.send(`
    <form action="/add-home" method="POST">
    <input type="text" name="name" placeholder="name" required>
    <input type ="submit" value="Add Home">
   </form>
    `);
  next();
});
app.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.send(`
   <h1>Home added successfully</h1>
   <a href="/">Go back to home</a>
    `);
  next();
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
