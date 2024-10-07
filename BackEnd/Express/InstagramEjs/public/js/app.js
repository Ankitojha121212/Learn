const btns = document.querySelectorAll("button");  
for( bt of btns){

    bt.addEventListener("click",()=>{
        console.log("Button was Clicked!!");
    })
}