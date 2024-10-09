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


/// inserting Data

const user1 = new User({
    name : "Ankit",
    age : 21,
    gender : "Male",
});
const user2 = new User({
    name : "Eve",
    gender : "Female",
    age : 22.
})

user1.save();
user2.save().then((res)=>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
});