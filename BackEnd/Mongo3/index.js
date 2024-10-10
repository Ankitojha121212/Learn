const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const path = require('path');
const Chat = require("./model/chat");
const methodOverride = require("method-override");


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

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

// create route
app.post("/chats",(req,res)=>{
   let {from,to,message} = req.body;

   let newChat = new Chat ({
    from : from,
    to : to,
    message : message,
    created_at : new Date(),
   });

   newChat.save().then(()=>{
    console.log("Chat saved");
   }).catch((err)=>{
    console.log(err);
   });

   res.redirect("/chats");
})

// edit route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});

})

app.put("/chats/:id", (req,res)=>{
    let {id} = req.params;
    let {message : newMessage} = req.body;
    let updatedChat = Chat.findByIdAndUpdate(id, { message : newMessage}, { new: true });
    res.redirect("/chats");
    console.log(updatedChat);


    
})


app.listen(port , ()=>{
    console.log("Server started at port : ",port);
});
