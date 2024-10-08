const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');
const port = 8080;


app.use(methodOverride('_method'));

//for creating new unique id
const {v4 : uuidv4} = require('uuid');


app.use(express.urlencoded({extended : true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

// we don't have database connectivity right now so we can store out posts data in an array
let posts = [
    {   

        id :  uuidv4() ,
        username : "Ankit",
        content : "I am learning DSA Development and English Speaking "
    },
    {   
        id : uuidv4() ,
        username : "Bhavana",
        content : "I am learning Data Analytics"
    },
    {
        id : uuidv4() ,
        username : "Mahi",
        content : "I am preparing for Govt. Jobs such as UPSC and SSC"
    },
]

// posts page
app.get("/posts",(req,res)=>{
    // console.log("Server running in optimal condition!!");
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

// this will accept the post request on our posts page for adding new post
app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.render("show.ejs",{post});
})

// patch request for updating the content 

app.patch("/posts/:id",(req,res) => {
    let {id} = req.params;
    console.log(id);
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post.content);
    res.redirect("/posts");
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{post});
    
})

app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
     posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
})
app.listen(port,()=>{
    console.log(`Server Started at port : ${port}`)
})
