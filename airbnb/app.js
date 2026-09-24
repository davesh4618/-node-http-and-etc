const express = require("express");
const session = require("express-session");
const mongodbstore = require("connect-mongodb-session")(session);
const dbpath =
  "mongodb+srv://devesh:devesh123@cluster0.7kgephf.mongodb.net/airbnb?appName=Cluster0";
const app = express();
const port = 4000;
const path = require("path");
const rootpath = require("./utility/path_utils");
const userrouter = require("./routes/userroutes");
const { hostrouter } = require("./routes/hostrouter");
const authrouter = require("./routes/authrouter.js");
const { pagenotfound } = require("./controler/errors");

const { default: mongoose } = require("mongoose");

app.set("view engine", "ejs");
app.set("views", "views");
const store = new mongodbstore({
  uri: dbpath,
  collection: "sessions",
});

app.use(express.static(path.join(rootpath, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: "jhumki",
  resave: false,
  saveUninitialized: false,
  store: store
}));

app.use((req, res, next) => {
  
  req.isloggedin = req.session.isloggedin;
  next();
});
app.use(userrouter);

app.use("/host", (req, res, next) => {
  if (!req.isloggedin) {
    return res.redirect("/login");
  } else {
    next();
  }
});
app.use("/host", hostrouter);
app.use(authrouter);
app.use(pagenotfound);



mongoose
  .connect(dbpath)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });
