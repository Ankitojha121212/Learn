let fav = "Asur";

let guess = prompt("Enter Your Favorite movie.");

while((guess !== fav) && (guess !== 'quit')){
        guess = prompt("Try Again!!!");
}
if(guess == fav){
    console.log('Congrats');
}else{
    console.log("you Quit");
}