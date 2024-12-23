const Listing = require("../models/listing");

module.exports.index = async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
 };

 module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new.ejs");
};

module.exports.createNewListing = async(req,res,next)=>{
    let url = req.file.path;
    let filename = req.file.filename;
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url,filename};
    
    await newListing.save();
    req.flash("success","New Listing Created");
    res.redirect("/listings");
    };

    
module.exports.renderUpdateForm = async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing){
       req.flash("error","Listing is not Valid !!!");
       res.redirect("/listings");
    }else{
        let originalImageURL = listing.image.url;
       originalImageURL =  originalImageURL.replace("/upload","/upload/w_250");
        res.render("listings/edit.ejs",{listing,originalImageURL});

    }
};

module.exports.updateListingDetails = async (req,res)=>{
    let {id} = req.params;
   let listing =  await Listing.findByIdAndUpdate(id,{...req.body.listing});

    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url,filename};
        await listing.save();
    }
    req.flash("success","Listing Updated!!");
    res.redirect(`/listings/${id}`);

};

module.exports.showListing = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({
       path : "reviews",
       populate : {
           path : "author",
       },
    })
    .populate("owner");
//    console.log(listing);
    if(!listing){
       req.flash("error","Listing you requested is not valid !!!");
       res.redirect("/listings");

    }else{

        res.render("listings/show.ejs",{listing});
    }

};

module.exports.deleteListing = async(req,res)=>{
    let {id} = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);

    req.flash("success","Listing Deleted !!");
    res.redirect("/listings");
};