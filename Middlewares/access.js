const express = require('express');
const app = express();

app.use("/api",(req,res,next)=>{

    let {token} = req.query;
    if(token === "accessToken"){
        next();
    }else{

        res.send("ACCESS DENIED!!!");
    }
})

app.get("/api",(req,res)=>{
 let random = Math.floor(1000 + Math.random()*9000);
    res.send(`OTP : ${random}`);
})

app.listen(8080,()=>{
    console.log("Server started at 8080");
})