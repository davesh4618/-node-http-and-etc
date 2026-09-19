const express = require("express");
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
app.use(express.static(path.join(rootpath, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(userrouter);

app.use("/host", hostrouter);
app.use(authrouter);
app.use(pagenotfound);

const dbpath =
  "mongodb+srv://devesh:*******@cluster0.7kgephf.mongodb.net/airbnb?appName=Cluster0";

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
