const express = require('express');
const app = express();

const mongoose = require("mongoose");

const mongoUrl = "mongodb://127.0.0.1/wonderlust";

async function main(){
    await mongoose.connect(mongoUrl);
}
main().then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err);
})

app.get("/",(req,res)=>{
    res.send("On root page");
})

app.listen(8080,()=>{
    console.log("Server started");
})