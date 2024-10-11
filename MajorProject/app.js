const express = require('express');
const app = express();
const Listing = require("./models/listing");
const mongoose = require("mongoose");
const mongoUrl = "mongodb://127.0.0.1/wonderlust";
const path = require("path");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

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


app.get("/listings", async (req,res)=>{
   const allListings = await Listing.find({});
   res.render("listings/index.ejs",{allListings});
})
// new route for creating the new listing
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
})

// show route
app.get("/listings/:id",async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});

})


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

app.listen(8080,()=>{
    console.log("Server started");
})