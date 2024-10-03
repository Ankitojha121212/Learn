function saveToDB (data) {
    return new Promise ((resolve,reject) =>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve("Data was saved");
            // console.log("Data was Saved");
        }else{
            reject("Data NOt Saved");
        }
    })
}


let request = saveToDB("Hifen");
request.then(()=>{
    console.log("Data is Saved!!!!!!!!!!");
    console.log(request);
})
.catch(()=>{
    console.log("Data Not Saved !!!!!!!!!!!!!!");
    console.log(request);
})