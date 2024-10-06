const express = require("express");

const app = express();
// console.dir(app);

let port = 3000;

app.listen(port,()=>{
    console.log(`Server is Started and Waiting for the Request on Port : ${port}`);
})


// app.use((req,res)=>{
//     console.log("Request Recieved");

//     //sending the response
//     res.send("This is a Basic Response");
// })

app.get("/",(req,res)=>{
    res.send("You are on Root Path!!");
})

app.get("/contact",()=>{
    res.send("You are on Contact Path!!");
})

app.get("*",(req,res)=>{
    res.send("You Are ON Wrong Path!!");
})


// for post Request

// app.post("/",(req,res)=>{
//     res.send("You are on root path with post request!!");
// })



///////////////////////////////  
// Path parameters

// app.get("/:username/:id",(req,res)=>{
//     console.log(req.params);
//     res.send(`hello @${username}.`);
// })

app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    res.send(`hello @${username} with id : ${id}.`);
    console.log(req.params);
})