const express = require('express');
const app = express();

// middleware
app.use((req,res)=>{
    console.log("I am a middle Ware");
    res.send("Middle")
})


app.get("/random",(req,res)=>{
    res.send("This is random page");
})

app.get("/",(req,res)=>{
    res.send("Root Page");
})


app.listen(8080,()=>{
    console.log("Server started at port 8080");
})