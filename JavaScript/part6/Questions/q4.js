/**
 * 
 * Create a Function whice prints the table of an number
 */


function table(n){
    for(let i = 1;i<=10;i++){
        console.log(i*n);
    }
}
let number = prompt("Enter a number for which you want the table, or type 'quit' to exit: ");

while (number !== "quit") {
    let num = parseInt(number); // Convert string input to a number
    if (!isNaN(num)) { // Check if input is a valid number
        table(num);
    } else {
        console.log("Please enter a valid number.");
    }
    number = prompt("Enter a number for which you want the table, or type 'quit' to exit: ");
}