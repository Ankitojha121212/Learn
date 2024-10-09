const mongoose = require('mongoose');

const {Schema} = mongoose;

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

main().then(()=>{
    console.log("mongodb Connected Successfully!");
}).catch((err)=>{
    console.log("Mongodb not Connected Successfully !!",err);
});

// setting up schema

const bookSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    author : {
        type : String,
    },
    price :{
        type : Number,
    },
});

// writing the model

const Book = mongoose.model("Book", bookSchema);

/// inserting data

let book1 = new Book({
    title : "The way to the Superior Man",
    author : "David Deida",
    price : 250,
});

book1
    .save()
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })