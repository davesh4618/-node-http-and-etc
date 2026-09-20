exports.pagenotfound = (req, res, next) => {
  res.render("404" , { pagetittle: "Page Not Found" , isloggedin: req.isloggedin } );

};
