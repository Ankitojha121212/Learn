
function saveToDB(data){
    return new Promise((resolve,reject ) => {
        let internetSpeed = Math.floor(Math.random() * 10)+1;
        if(internetSpeed > 4){
            resolve("Sucess : Data was Saved");
        }else{
            reject("failure : Data was Not Saved");
        }
    }
)};

saveToDB("abc");