exports.authcontroler = (req, res, next) => {
  res.render("auth/login", { pagetittle: "Login", isloggedin: false });
};

exports.authpostcontroler = (req, res, next) => {
 
  res.cookie("isloggedin", true);
  res.redirect("/");
};
exports.logoutconstroler = (req, res, next) => {
  res.clearCookie("isloggedin");
  console.log("cookie cleared");
  res.redirect("/");
};
