let h1 = document.querySelector('h1');

function change(color,delay){
    return new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                h1.style.color = color;
                resolve("Color is Changed");
            },delay);
    })
}

// change("red",1000,()=>{
//     change("pink",1000,()=>{
//         change("green",1000);
//     })
// })

change("red",1000)
.then(()=>{
    console.log("Color changed");
    return change("green",1000);
})
.then(()=>{
    console.log("Color changed");
})