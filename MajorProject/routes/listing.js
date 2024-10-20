const express = require('express');
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema,reviewSchema} = require('../schema.js');
const {isLoggedIn, isOwner,validateListing} = require("../middleware.js");
const Listing = require("../models/listing");
const listingController = require("../controllers/listings.js");


router.get("/", wrapAsync(listingController.index));



 // new route for creating the new listing
 router.get("/new",isLoggedIn,wrapAsync(listingController.renderNewForm));

 //new route listing creation
 router.post("/", validateListing, wrapAsync(listingController.createNewListing));
 
 //update route
 router.get("/:id/edit", isLoggedIn,
    isOwner,
     wrapAsync(listingController.renderUpdateForm));
 
 // edit route
 router.put("/:id", 
     isLoggedIn,
     wrapAsync(listingController.updateListingDetails));
 
 // show route
 router.get("/:id", wrapAsync(listingController.showListing));
 
 // Delete Listing
 router.delete("/:id", isLoggedIn , isOwner,
     wrapAsync(listingController.deleteListing));


 module.exports = router;