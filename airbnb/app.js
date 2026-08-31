const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const userrouter = require("./routes/userroutes");
const { hostrouter } = require("./routes/hostrouter");
const path = require("path");
const rootpath = require("./utility/path_utils");
const { pagenotfound } = require("./controler/errors");
const db = require("./utility/databas.utils");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(rootpath, "public")));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
db.execute("SELECT * FROM homes")
  .then((r) => {
    console.log(r);
  })
  .catch((err) => {
    console.log(err);
  });
app.use(userrouter);
app.use(express.urlencoded());
app.use("/host", hostrouter);

app.use(pagenotfound);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
