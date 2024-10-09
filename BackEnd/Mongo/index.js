const mongoose = require('mongoose');

const {Schema} = mongoose;

async function main(){
   await mongoose.connect("mongodb://127.0.0.1:27017/test");
    
}

main().then(()=>{
    console.log("Connection 'build Successfully!!");
})
.catch((err) =>{
    console.log("Connection Failed !!! : ",err);
})

/// making Schema

const userSchema = new Schema({
    name : String,
    age : Number,
    gender : String,
});

const User = mongoose.model("User",userSchema);