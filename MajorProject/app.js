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
app.get("/testListing", async (req,res)=>{
    const sampleListing = new Listing({
        title : "Noida me villa",
        description : "Ye h Noida ka Villa jo kr deta h Sbko Gilla, mat krna iska paani pila pila < Samjhe rangila >",
        price : 50000,
        location : "Noida",
        country : "India"
    });
  await  sampleListing.save();
    console.log("sample data saved");
    res.send("TestListing working");
})

app.listen(8080,()=>{
    console.log("Server started");
})