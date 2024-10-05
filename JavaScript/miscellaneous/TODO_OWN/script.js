let ul = document.querySelector('ul');
let button = document.querySelector('button');
let input = document.querySelector('input');

button.addEventListener("click",()=>{
    let li = document.createElement('li');
    li.innerText = input.value;
    input.value = "";
    ul.appendChild(li);
    console.log("Task Added");

    let deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete me";
    li.appendChild(deleteButton);

    li.value = input.value;

})


ul.addEventListener("click",(event)=>{
    if(event.target.nodeName == "BUTTON"){
        let item = event.target.parentElement;
        console.log(item);
        item.remove();
    }
})
