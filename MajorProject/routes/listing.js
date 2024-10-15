const express = require('express');
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema,reviewSchema} = require('../schema.js');

const Listing = require("../models/listing");

/// making server side validator function for validating the listing information from server side by joi
function validateListing(req,res,next){
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((e)=>el.message).join(',');
        throw new ExpressError(400, error);
    }else{
        next();
    }
}

router.get("/", wrapAsync(async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
 })
 );
 // new route for creating the new listing
 router.get("/new",(req,res)=>{
     res.render("listings/new.ejs");
 })
 //new route listing creation
 router.post("/", validateListing,
     wrapAsync(async(req,res,next)=>{
         // if(! req.body.listing){
             //     throw new ExpressError(400 , "Send valid data for listing..")
             // }
 
         
         // if(! newListing.title){
             //     throw new ExpressError(400, "Title is missing!!");
         // }else if(! newListing.description){
         //     throw new ExpressError(400,"Description is missing!!");
         // }else if(! newListing.price){
             //     throw new ExpressError(400,"Price is missing!!");
         // }else if(! newListing.location){
             //     throw new ExpressError(400,"Location is missing!!");
             // }else if(! newListing.country){
                 //     throw new ExpressError(400,"Country is missing!!");
                 // }
                 
               
                 
                 
                 let newListing = new Listing(req.body.listing);
             await newListing.save();
             res.redirect("/");
 
         }
 
         
 )
 );
 
 //update route
 router.get("/:id/edit",
     wrapAsync(async(req,res)=>{
     let {id} = req.params;
     let listing = await Listing.findById(id);
     res.render("listings/edit.ejs",{listing});
 })
 );
 
 // edit route
 router.put("/:id", 
     wrapAsync(async (req,res)=>{
         let {id} = req.params;
     await Listing.findByIdAndUpdate(id,{...req.body.listing});
     res.redirect(`/${id}`);
     
 })
 );
 
 // show route
 router.get("/:id", wrapAsync(async(req,res)=>{
     let {id} = req.params;
     const listing = await Listing.findById(id).populate("reviews");
     res.render("listings/show.ejs",{listing});
 
 })
 );
 
 // Delete Listing
 router.delete("/:id",
     wrapAsync(async(req,res)=>{
         let {id} = req.params;
     const deletedListing = await Listing.findByIdAndDelete(id);
     console.log(deletedListing);
     res.redirect("/");
 })
 );


 module.exports = router;