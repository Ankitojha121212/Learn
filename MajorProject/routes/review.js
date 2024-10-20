const express = require("express");
const router = express.Router({mergeParams : true});


const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError.js");
const {reviewSchema} = require('../schema.js');
const Review = require("../models/review.js");
const Listing = require("../models/listing");
const { isLoggedIn, isReviewAuthor } = require("../middleware.js");
// const validateReview = require("../middleware.js");



const validateReview =  (req,res,next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((e)=> e.message).join(',');
        throw new ExpressError(400,errMsg);
        
    }else{
        next();
    }
}








/////////// //////////////////// Review route
// Review route
router.post("/",
    isLoggedIn,
    validateReview,
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        let listing = await Listing.findById(id);

        if (!listing) {
            req.flash("error", "Listing not found!!");
            return res.redirect("/listings");
        }

        let newReview = new Review(req.body.review);
        listing.reviews.push(newReview);
        newReview.author = req.user._id;

        await newReview.save();
        await listing.save();

        req.flash("success", "New Review Added!!!");
        res.redirect(`/listings/${listing._id}`);
    })
);






// Delete Review Route
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(async(req,res)=>{
    let{id,reviewId} = req.params;
   await Listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}})
     await Review.findByIdAndDelete(reviewId);
        req.flash("success","Review Deleted !!!");
     res.redirect(`/listings/${id}`);

}));

module.exports = router;