const { check, validationResult } = require("express-validator")
exports.authcontroler = (req, res, next) => {
  res.render("auth/login", { pagetittle: "Login", isloggedin: false });
};

exports.authpostcontroler = (req, res, next) => {
  req.session.isloggedin = true;
  // res.cookie("isloggedin", true);
  res.redirect("/");
};
exports.logoutconstroler = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("Error destroying session:", err);
    }
  });
  console.log("cookie cleared");
  res.redirect("/");
};
exports.signupcontroler = (req, res, next) => {
  res.render("auth/signup", { pagetittle: "Signup", 
    errors :[],
    output : { firstName: "", lastname: "", email: "", password: "", confirmPassword: "" }
    ,isloggedin: false });
};
exports.signuppostcontroler = [
  check("firstName").notEmpty().withMessage("First name is required"),
  check("lastname").notEmpty().withMessage("Last name is required"),
  check("email").isEmail().withMessage("Please enter a valid email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  check("confirmPassword")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Passwords do not match"),
  (req, res, next) => {
    const { firstName, lastname, email, password, confirmPassword } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).render("auth/signup", {
        pagetittle: "Signup",
        isloggedin: false,
        errors: errors.array().map((err) => err.msg),
        output: { firstName, lastname, email, password, confirmPassword },
      });
    }

   res.redirect("/logout")
  },
];
