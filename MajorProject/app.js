const express = require('express');
const app = express();
const Listing = require("./models/listing");
const mongoose = require("mongoose");
const mongoUrl = "mongodb://127.0.0.1/wonderlust";
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema,reviewSchema} = require('./schema.js');
const Review = require("./models/review.js");

const listings = require('./routes/listing.js');

app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"/public")))

app.use(express.urlencoded({extended : true}));

async function main(){
    await mongoose.connect(mongoUrl);
}
main().then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err);
})



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

app.get("/",(req,res)=>{
    res.send("On root page");
})


app.use("/listings",listings);

/////////// //////////////////// Review route
app.post("/listings/:id/reviews",validateReview,wrapAsync(async (req,res)=>{
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
app.delete("/listings/:id/reviews/:reviewId",wrapAsync(async(req,res)=>{
    let{id,reviewId} = req.params;
   await Listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}})
     await Review.findByIdAndDelete(reviewId);

     res.redirect(`/listings/${id}`);

}))

// // test listing
// app.get("/testListing", async (req,res)=>{
//     const sampleListing = new Listing({
//         title : "Noida me villa",
//         description : "Ye h Noida ka Villa jo kr deta h Sbko Gilla, mat krna iska paani pila pila < Samjhe rangila >",
//         price : 50000,
//         location : "Noida",
//         country : "India"
//     });
//   await  sampleListing.save();
//     console.log("sample data saved");
//     res.send("TestListing working");
// })

app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page Not Found !!!!!"));
});

app.use((err,req,res,next)=>{
    let {statusCode=500,message="unknown error found!!#!!"} = err;
    res.status(statusCode).render("error.ejs",{message});
});

app.listen(8080,()=>{
    console.log("Server started");
})