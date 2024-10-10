const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const path = require('path');
const Chat = require("./model/chat");


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"public")));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
    .then((res)=>{
        console.log("mongoose connected ");
    })
    .catch((err)=>{
        console.log("Mongoose not connected Successfully",err);
    });





app.get("/",(req,res)=>{
    res.send("On home page");
});



// index page route
app.get("/chats", async (req,res)=>{
   let chats = await Chat.find();
//    console.log(chats);
   res.render("index.ejs",{chats});
})

//new route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})


app.listen(port , ()=>{
    console.log("Server started at port : ",port);
});
