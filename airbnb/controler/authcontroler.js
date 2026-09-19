exports.authcontroler = (req, res, next) => {
  res.render("auth/login", { pagetittle: "Login" });
};

exports.authpostcontroler = (req, res, next) => {
  
  res.redirect("/");
};