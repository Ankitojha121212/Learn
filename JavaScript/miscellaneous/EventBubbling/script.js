let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

// div.addEventListener('click',()=>{
//     console.log("Div was Clicked!!!");
// })

// ul.addEventListener('click',()=>{
//     console.log("Unodered List was Clicked!!!!");
// })

// for(li of lis){
//     li.addEventListener('click',()=>{
//         console.log("List Element Was Clicked!!!!");
//     })
// }

/// To Solve this problem we Use

div.addEventListener("click",(event)=>{
    event.stopPropagation();
    console.log("div was Clicked!!");
})

ul.addEventListener("click",(event)=>{
    event.stopPropagation();
    console.log("Unordered List Was Clicked!!!");
})

for(li of lis){
    li.addEventListener("click",()=>{
        event.stopPropagation();
        console.log("List was Clicked!!!");
    })
}