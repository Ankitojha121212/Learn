/**
 * Qs4. Write a JavaScript program to test whether the character at the given (character)
 index is lower case.
 */

 let char = "AnlkoasdADSFnasdfASDGTAfgdfAfasdFDSasDFaSf";

 let n = 0;
 let character = char[n];

 if(character === character.toLowerCase() && character !== character.toUpperCase()){
    console.log("lower case");
 }else{
    console.log("not lower case");
 }