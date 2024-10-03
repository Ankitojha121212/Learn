
function saveToDB(data,success,failure){
    let internetSpeed = Math.floor(Math.random()*10);   // 0 to 10;

    if(internetSpeed > 4){
        success();
    }else{
        failure();
    }

}

saveToDB(
    "Happy Threads",() =>{
        console.log("Success 1");
        saveToDB(
            "Anjali Boutique",
            () =>{
                console.log("Sucess 2 : DATA SAVED");
                saveToDB(
                    "Tech Startup",
                      () =>{
                        console.log("Sucess 3 : Data Saved");
                    },() =>{
                        console.log("Failure 3 : Data was not Saved");
                    }
                )
          },() =>{
                console.log("Failure 2 : Data Was not saved");
            }
        )
    },
    () =>{
        console.log("Failure !!!");
    }
)