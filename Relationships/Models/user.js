const mongoose = require("mongoose");
const {Schema} = mongoose;


 async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}
main().then(()=>{
    console.log("Data base Connected Successfully");
}).catch((err)=>{
    console.log(err);
});


const userSchema = new Schema({

    username : String,
    addresses : [
        {
            _id : false,
            location : String,
            city : String,
        }
    ]
});

const User = mongoose.model("User",userSchema);


const addUser = async()=>{
    let user1 = new User({
        username : "Ankit_Ojha",
        addresses : [{
            location : "221 B Street",
            city : "London"
        }],
    });


    user1.addresses.push({
        location : "105 AXL Greator",
        city : "New York"
    });
        let result = await user1.save();
        console.log(result);
 
 
 
}
addUser();