const express = require('express');
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema,reviewSchema} = require('../schema.js');
const {isLoggedIn, isOwner,validateListing} = require("../middleware.js");
const Listing = require("../models/listing");



router.get("/", wrapAsync(async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
 })
 );
 // new route for creating the new listing
 router.get("/new",isLoggedIn,(req,res)=>{
        res.render("listings/new.ejs");
    

 })
 //new route listing creation
 router.post("/", validateListing,
     wrapAsync(async(req,res,next)=>{

         let newListing = new Listing(req.body.listing);
         newListing.owner = req.user._id;
         await newListing.save();
         req.flash("success","New Listing Created");
         res.redirect("/listings");
 
         }
 
         
 )
 );
 
 //update route
 router.get("/:id/edit", isLoggedIn,
    isOwner,
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
     isLoggedIn,
     wrapAsync(
        async (req,res)=>{
         let {id} = req.params;

     await Listing.findByIdAndUpdate(id,{...req.body.listing});
     req.flash("success","Listing Updated!!");
     res.redirect(`/listings/${id}`);
     
 })
 );
 
 // show route
 router.get("/:id", wrapAsync(async(req,res)=>{
     let {id} = req.params;
     const listing = await Listing.findById(id)
     .populate({
        path : "reviews",
        populate : {
            path : "author",
        },
     })
     .populate("owner");
    console.log(listing);
     if(!listing){
        req.flash("error","Listing you requested is not valid !!!");
        res.redirect("/listings");

     }else{

         res.render("listings/show.ejs",{listing});
     }
 
 })
 );
 
 // Delete Listing
 router.delete("/:id", isLoggedIn , isOwner,
     wrapAsync(async(req,res)=>{
         let {id} = req.params;
     const deletedListing = await Listing.findByIdAndDelete(id);
     console.log(deletedListing);

     req.flash("success","Listing Deleted !!");

     res.redirect("/listings");
 })
 );


 module.exports = router;