module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "Must Be Signed In");
    return res.redirect("back");
  }
  next();
};