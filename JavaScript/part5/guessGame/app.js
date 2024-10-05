let max = prompt("Enter a number from which is your max number");

let num = Math.floor(Math.random() * max)+1;
let input = prompt("choose between 1 to "+max);
// let quit = false;
// while( num != input && input != "quit"){
//     if(quit == input){
//         quit = true;
//     }
//         input = prompt("Try again!!! or quit");
    

// }
// if(quit === true){
//     alert("BYYYYYYYYYYYYYy");
// }else{

//     alert("Congratulations You Win !!!!!!!!!!!!1");
// }

while(true){
    if(input == 'quit'){
        alert("Game Over!! You lose the game ,, Random number was :  "+ num);
        break;
    }

    if(input == num){
        alert("you Win !! , random number was : "+num);
        break;
    }else{
        if(input > num){
            input = prompt("try again with lesser number than  : "+input);
        }else{
            input = prompt("try again with larger number than : " +input);

        }
    }
}