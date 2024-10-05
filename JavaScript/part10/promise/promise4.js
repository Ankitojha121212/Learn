function saveToDB(data){
    return new Promise ((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve("DATAAA");
        }else{
            reject("BATAA");
        }
    })
}

saveToDB("A1")
.then((result)=>{
    console.log("Data Saved");
    console.log(result);
    return saveToDB("A2");
})
.then((result)=>{
    console.log("Data 2 Saved");
    console.log(result);
    return saveToDB("A3");
})
.then((result)=>{
    console.log("Data 3 Saved");
    console.log(result);
})
.catch((error)=>{
    console.log("Data Not Saved");
    console.log(error);
})