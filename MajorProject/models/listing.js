const mongoose = require("mongoose");
const {Schema} = mongoose;
const Review = require('./review.js');

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
    },
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review"
        },
    ],
});





listingSchema.post("findOneAndDelete",async (listing)=>{
    if(listing){
        Review.deleteMany({_id : {$in : listing.reviews}});
    }
});

const Listing  = mongoose.model("Listing",listingSchema);
module.exports = Listing;