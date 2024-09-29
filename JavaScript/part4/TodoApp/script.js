let todo = [];

let request = prompt("Enter Your Request: ");
console.log(request);

while(true){
    if(request == "quit"){
        console.log("Quiting the App");
        console.log("___________________________________________");
        break;
    }

    if(request == "list"){
        console.log("=====================================================");
        for(let i = 0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("=====================================================");
    }else if(request == "add"){
        let task = prompt("Add Task");
        todo.push(task);
        console.log("task Added");
    }else if(request == "delete"){
        let del = prompt("which index you have to delete");
        todo.splice(del,1);
        console.log("task Deleted");
    }else{
        console.log("Wrong Request!!");
    }
   request =  prompt("Enter the request");
}
