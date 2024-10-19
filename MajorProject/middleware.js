module.exports.isLoggedIn  = (req,res,next) =>{
    if(!req.isAuthenticated()){
        req.flash("error","Please Login or Signup !!");
        return res.redirect("/login");
    }
    next();
}