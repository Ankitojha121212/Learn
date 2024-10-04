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


let deleteButton = document.querySelectorAll('.delete');
for(del of deleteButton){
    del.addEventListener('click',()=>{

        let par = this.parentElement;
        par.remove();
        console.log(par);
        console.log("Button Deleted");
    })
}