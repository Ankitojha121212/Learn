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


// let request = saveToDB("Hifen");
// request.then(()=>{
//     console.log("Data is Saved!!!!!!!!!!");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("Data Not Saved !!!!!!!!!!!!!!");
//     console.log(request);
// })

// More compact version of Promise

saveToDB("hifen")
.then(()=>{
    console.log("Data is Saved!!!!!!!1");
        saveToDB("sigma").then(()=>{
            console.log("Data is Saved!!!!!!!!!!!!2");

                    saveToDB("Alpha").then(()=>{
                        console.log("Data is Saved !!!!!!!!!13");

                                saveToDB("gamma").then(()=>{
                                    console.log("DATA is Saved !!!!!!!!!!!!!!!!4");
                                }).catch("Data is NOT SAVED!!!!!!!!4");
                    }).catch(()=>{
                        console.log("Data is Not Saved!!!!!!!!!!!113");
                    })
        }).catch(()=>{
            console.log("Data is Not Saved !!!!!!!!!!12");
        })
}).catch(()=>{
    console.log("Data is Not Saved !!!!!!!!!!!!!!1");
})