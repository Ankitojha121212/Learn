const express = require("express");

const app = express();

const port = 8080;

app.get("/register" ,(req,res)=>{
    let {username,password} = req.query;
    res.send(`Standard Get Request !! Welcome ${username}`);
})
app.post("/register" ,(req,res)=>{
    res.send("Standard Post response");
})


app.listen(port ,()=>{
    console.log(`Server is Started : ${port}`);
})