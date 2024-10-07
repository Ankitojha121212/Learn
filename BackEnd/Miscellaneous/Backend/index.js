const express = require("express");

const app = express();

// for post request data ussage
app.use(express.urlencoded({extended : true}));
app.use(express.json());
const port = 8080;

app.get("/register" ,(req,res)=>{
    let {username,password} = req.query;
    res.send(`Standard Get Request !! Welcome ${username}`);
})
app.post("/register" ,(req,res)=>{

    console.log(req.body);  // without middleware or without pre Express recoginition we can not access the req.body data for that we have to predefine the type of data format and urldata endcoded type
    res.send("Standard Post response");
})


app.listen(port ,()=>{
    console.log(`Server is Started : ${port}`);
})