function saveToDB(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve();
        }else{
            reject();
        }
    });
}

saveToDB("A1")
.then(()=>{
  console.log("Data 1 Saved");
  return saveToDB("A2");
})
.then(()=>{
    console.log("Data 2 Saved");
    return saveToDB("A3");
})
.then(()=>{
    console.log("Data 3 Saved");
})
.catch(()=>{
    console.log("Data Not Saved");
})