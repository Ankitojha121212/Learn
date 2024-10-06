const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render('home.ejs');
})

app.get("/help",(req,res)=>{
    res.send("How can i help You  <button>Click here for help</button>")
})

app.listen(port,()=>{
    console.log(`Server Started on port : ${port}`);
})