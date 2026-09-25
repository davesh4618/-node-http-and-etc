exports.authcontroler = (req, res, next) => {
  res.render("auth/login", { pagetittle: "Login", isloggedin: false });
};

exports.authpostcontroler = (req, res, next) => {
  req.session.isloggedin = true;
  // res.cookie("isloggedin", true);
  res.redirect("/");
};
exports.logoutconstroler = (req, res, next) => {
  res.clearCookie("isloggedin");
  console.log("cookie cleared");
  res.redirect("/");
};
exports.signupcontroler = (req, res, next) => {
  res.render("auth/signup", { pagetittle: "Signup", isloggedin: false });
};