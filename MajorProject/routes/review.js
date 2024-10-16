const express = require("express");
const router = express.Router({mergeParams : true});


const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError.js");
const {reviewSchema} = require('../schema.js');
const Review = require("../models/review.js");
const Listing = require("../models/listing");






// / making server side validator function for validating the review information from the server side by joi
function validateReview(req,res,next){
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((e)=> el.message).join(',');
        throw new ExpressError(400,error);
        
    }else{
        next();
    }
}

/////////// //////////////////// Review route
router.post("/",validateReview,wrapAsync(async (req,res)=>{
    let {id} = req.params;
   let listing = await Listing.findById(id);
   let newReview = new Review(req.body.review);

   listing.reviews.push(newReview);

   await newReview.save();
   await listing.save();

//    console.log(newReview);
//    console.log(listing);
   res.redirect(`/listings/${id}`);
})); 





// Delete Review Route
router.delete("/:reviewId",wrapAsync(async(req,res)=>{
    let{id,reviewId} = req.params;
   await Listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}})
     await Review.findByIdAndDelete(reviewId);

     res.redirect(`/listings/${id}`);

}));

module.exports = router;