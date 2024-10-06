const express = require("express");
const app = express();
const path = require("path");
const port = 8080;


//app.use(express.static("public"));  // throuh that we can access it with only same directory
 app.use(express.static(path.join(__dirname,"public/css"))); // now it can accessed from it parent directory as well
 app.use(express.static(path.join(__dirname,"public/js"))); // now it can accessed from it parent directory as well

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


app.get("/ig/:username",(req,res)=>{
    const {username} = req.params;
    const instadata = require('./data.json');

    const data =  instadata[username];
    if(data){
        res.render("instagram.ejs",{ data });
    }else{
        res.render("error.ejs");
    }

})

app.listen(port,()=>{
    console.log(`Server Started on Port : ${port}`);
})

app.get("/",(req,res)=>{
    res.render("home.ejs");
})