let h1 = document.querySelector('h1');

function changeColor(color,delay) {
    return new Promise ((resolve,reject)=>{
        let randomRejection = Math.floor(Math.random()*10)+1;
        if(randomRejection > 5){
            setTimeout(()=>{
                h1.style.color = color;
                resolve("Color Changed");
                console.log("Color Changed",color);
            },delay);
        }else{
            reject("Weak");
        }
       
    })
}

async function demo(){
    try{

        await changeColor("red",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
        await changeColor("grey",1000);
        await changeColor("pink",1000);
     
    }catch(err){
        console.log("Error Cought: ",err);
    }
    
   let a = 5;
   console.log("Random Answer : ", a+44);
}
demo();

