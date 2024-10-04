let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
button.addEventListener("click",()=>{

    let li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
    let delbtn = document.createElement('button');
    delbtn.innerText  = "Delete";

    li.appendChild(delbtn);


  console.log(input.value);
  input.value = "";

  li.value = input.value;
})

ul.addEventListener("click",(event)=>{
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
        console.log("Button clicked")
    }
})

// let deleteButton = document.querySelectorAll(".delete");
// // for(dels of deleteButton){
//     deleteButton.addEventListener('click',()=>{

//         let para = deleteButton.parentElement;
//         console.log(para);
//         console.log("Button Deleted");
//         para.remove();
//     })
// // }