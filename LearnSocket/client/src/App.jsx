import React, { useEffect } from 'react'
import {io} from  'socket.io-client';

const App = () => {

  const socket = io('http://localhost:3000');
  useEffect(()=>{
    socket.on("connect",()=>{
      console.log("Connected",socket.id);
    });
    
    socket.on("welcome",(e)=>{
      console.log(e,"good one");
  });

  return  ()=>{
      socket.disconnect();
  }
  },[]);
  return (
    <div>

      hiiiiii
    </div>
  )
}

export default App
