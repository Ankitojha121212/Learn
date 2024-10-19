const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');



////////// SignUp process
router.get("/signup",(req,res)=>{
    res.render('users/signup.ejs');
})


router.post("/signup", wrapAsync( async (req,res)=>{

    try{

        let {username,email,password} = req.body;
        const newUser = new User({email,username});
        
        const registeredUser = await User.register(newUser,password);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","Registered Successfully !!!");
            // console.log(registeredUser);
            res.redirect("/listings");

        })
        
    }catch(e){
        req.flash("error",e);
        res.redirect("/listings");
    }

    }));


////////// login process

router.get("/login",(req,res)=>{
    res.render("users/login.ejs");
});


router.post("/login", saveRedirectUrl,
     passport.authenticate('local',{failureRedirect:"/login",failureFlash:true}) ,
     async (req,res) =>{
    let {username} = req.body;
    req.flash("success",`Happy to see you  ${username} Again !!`);
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);

})


///////////// logOUt
router.get("/logout",(req,res,next) => {
    req.logout((err)=>{
        if(err){
            next(err);
        } else{
            req.flash("success","logged out Successfully");
            res.redirect("/listings");
        }
    })
})

module.exports = router;