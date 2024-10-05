function saveToDB(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve();
        }else{
            reject();
        }
    })
}

// Promise chaining in InEfficient Way

// In that way of Chaining the promises Errors are encountering and we are not countering it 
saveToDB("Ankit")
.then(()=>{
    console.log("Data is Saved to DataBase 1");
        saveToDB("Ankit2").then(()=>{
            console.log("Data is Saved to DataBase 2");
        })
})
.catch(()=>{
    console.log("Data is not Saved!!!!!!!!!");
})

console.log("end");