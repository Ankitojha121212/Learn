const mongoose = require('mongoose');
const initData = require('./data');

const Listing = require('../models/listing');


const mongoUrl = "mongodb://127.0.0.1/wonderlust";

async function main(){
    await mongoose.connect(mongoUrl);
}
main().then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err);
});

const initDB = async() => {
       await Listing.deleteMany({});
       initData.data = initData.data.map((obj)=>({
        ...obj ,owner : "6713ab0a14cdbeb59a2bf4be"
       }));


       await Listing.insertMany(initData.data);
       console.log("Data was Saved !!");
}

initDB();