const mongoose = require("mongoose");
const {Schema} = mongoose;

const listingSchema = new Schema({
    title : {
        type : String,
        required : true,
        maxLength : 50,
    },
    Description : {
        type : String,
        required : true,
        minLength : 5,
    },
    image : {
        type : String,
        set : (v) => v === "" ? "https://unsplash.com/photos/sunloungers-fronting-buildings-near-mountain-DGa0LQ0yDPc" : v
    },
    price : {
        type : Number,
        required : true,

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