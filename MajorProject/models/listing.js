const mongoose = require("mongoose");
const {Schema} = mongoose;

const listingSchema = new Schema({
    title : {
        type : String,
        required : true,
        maxLength : 50,
    },
    description : {
        type : String,
    },
    image : {
        type : String,
        default : "https://unsplash.com/photos/sunloungers-fronting-buildings-near-mountain-DGa0LQ0yDPc",
        set : (v) => v === "" ? "https://unsplash.com/photos/sunloungers-fronting-buildings-near-mountain-DGa0LQ0yDPc" : v,
    },
    price : {
        type : Number,

    },
    location : {
        type : String,
    },
    country :{
        type : String,
    }
});

const Listing  = mongoose.model("Listing",listingSchema);
module.exports = Listing;