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

app.get("/",(req,res)=>{
    res.send("On root page");
})


app.get("/listings", wrapAsync(async (req,res)=>{
   const allListings = await Listing.find({});
   res.render("listings/index.ejs",{allListings});
})
);
// new route for creating the new listing
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
})
//new route listing creation
app.post("/listings", 
    wrapAsync(async(req,res,next)=>{
        if(! req.body.listing){
            throw new ExpressError(400 , "Send valid data for listing..")
        }

            let newListing = new Listing(req.body.listing);

        if(! newListing.title){
            throw new ExpressError(400, "Title is missing!!");
        }else if(! newListing.description){
            throw new ExpressError(400,"Description is missing!!");
        }else if(! newListing.price){
            throw new ExpressError(400,"Price is missing!!");
        }else if(! newListing.location){
            throw new ExpressError(400,"Location is missing!!");
        }else if(! newListing.country){
            throw new ExpressError(400,"Country is missing!!");
        }

        
            await newListing.save();
            res.redirect("/listings");

        }


)
);

//update route
app.get("/listings/:id/edit",
    wrapAsync(async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
})
);

// edit route
app.put("/listings/:id",
    wrapAsync(async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
})
);

// show route
app.get("/listings/:id", wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});

})
);

// Delete Listing
app.delete("/listings/:id", 
    wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
})
);

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