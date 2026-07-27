const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const userrouter = require("./routes/userroutes");
const {hostrouter} = require("./routes/hostrouter");
const path = require("path");
const rootpath = require("./utility/path_utils");

app.use(express.static(path.join(rootpath, "public")));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(userrouter);
app.use(express.urlencoded());
app.use("/host", hostrouter);

app.use((req, res, next) => {
  res.sendFile(path.join(rootpath, "views", "404.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
