module.exports.isLoggedIn  = (req,res,next) =>{
    if(!req.isAuthenticated()){
        req.flash("error","Please Login or Signup !!");
        req.session.redirectUrl = req.originalUrl;
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req,res,next) =>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}