exports.authcontroler = (req, res, next) => {
  res.render("auth/login", { pagetittle: "Login", isloggedin: false });
};

exports.authpostcontroler = (req, res, next) => {
  req.isloggedin = true;
  res.redirect("/");
};
