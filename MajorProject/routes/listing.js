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

         let newListing = new Listing(req.body.listing);
         await newListing.save();
         req.flash("success","New Listing Created");
         res.redirect("/listings");
 
         }
 
         
 )
 );
 
 //update route
 router.get("/:id/edit",
     wrapAsync(async(req,res)=>{
     let {id} = req.params;
     let listing = await Listing.findById(id);
     if(!listing){
        req.flash("error","Listing is not Valid !!!");
        res.redirect("/listings");
     }else{
         res.render("listings/edit.ejs",{listing});

     }
 })
 );
 
 // edit route
 router.put("/:id", 
     wrapAsync(async (req,res)=>{
         let {id} = req.params;
     await Listing.findByIdAndUpdate(id,{...req.body.listing});
     req.flash("success","Listing Updated!!");
     res.redirect(`/listings/${id}`);
     
 })
 );
 
 // show route
 router.get("/:id", wrapAsync(async(req,res)=>{
     let {id} = req.params;
     const listing = await Listing.findById(id).populate("reviews");

     if(!listing){
        req.flash("error","Listing you requested is not valid !!!");
        res.redirect("/listings");

     }else{

         res.render("listings/show.ejs",{listing});
     }
 
 })
 );
 
 // Delete Listing
 router.delete("/:id",
     wrapAsync(async(req,res)=>{
         let {id} = req.params;
     const deletedListing = await Listing.findByIdAndDelete(id);
     console.log(deletedListing);

     req.flash("success","Listing Deleted !!");

     res.redirect("/listings");
 })
 );


 module.exports = router;