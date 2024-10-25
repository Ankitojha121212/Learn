import express from "express";
// import { socket } from "server/rout";
import {createServer} from "http";
import cors from 'cors';
const app = express();
const port = 3000;
const server = createServer(app);
import { Server } from 'socket.io';
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Your frontend origin
    methods: ['GET', 'POST']
  }
});
io.on("connection",(socket)=>{
    console.log("Client connected");
    console.log("Id : ",socket.id);
    // socket.broadcast.emit("welcome",`AAAhhh habibi , Welcome to Dubai !!, ${socket.id}`);
    // // socket.broadcast.emit("wadacum",`EEEEEEEhhhhhhhhhheeeeeeeeee come to malayalam !! , ${socket.id}`);
    socket.on("disconnect",()=>{
        console.log("Client Disconnected : ",socket.id);
    })
})


app.use(
    cors({
      origin: 'http://localhost:5173', // Replace with your frontend URL
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true // if you need to allow cookies
    })
  );

app.get("/",(req,res)=>{
    res.send("Hello World !!!");
});
server.listen(port,()=>{
    console.log("Server is Started  on port : ",port);
});
