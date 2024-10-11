const express = require('express');
const app = express();
const Listing = require("./models/listing");

const mongoose = require("mongoose");

const mongoUrl = "mongodb://127.0.0.1/wonderlust";

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

// listing
app.get("/testListing",(req,res)=>{
    const sampleListing = new Listing({
        title : "Flat in Jaipur",
        description : "Best flat 1 BHK for couple and family on 4th floor with best view and fresh oxygen",
        price : 5000,
        location : "Jaipur",
        country : "India"
    });
    sampleListing.save();
    console.log("sample data saved");
    res.send("TestListing working");
})

app.listen(8080,()=>{
    console.log("Server started");
})