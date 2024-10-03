function saveToDB (data,success,failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;

    if(internetSpeed > 4){
        success();
    }else{
        failure();
    }
}


saveToDB(
    "92",()=>{
        console.log("Success 1 : Data Saved");
            saveToDB(
                "93",()=>{
                    console.log("Success 2 : Data Saved");
                            saveToDB(
                                "94",() =>{
                                    console.log("Success 3 : Data Saved");
                                            saveToDB(
                                                "95",()=>{
                                                    console.log("Sucess 4 : Data Saved");
                                                },  ()=>{
                                                    console.log("Failure 4 : Data Not Saved");
                                                }
                                            )
                                },   ()=>{
                                    console.log("Failure 3 : Data Not Saved");
                                }
                            )
                }, () =>{
                    console.log("Failure 2 : Data Not Saved");
                }
            )
    }, () =>{
        console.log("Failure 1 : Data Not Saved");
    }
)