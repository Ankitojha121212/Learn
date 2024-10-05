/**
 * Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
 positive number].
 For example: for array [7, 9, 0,-2] and n=3
 Print, [7, 9, 0]
 */

 let array = ['mango','apple','chappal','dumbel','boxing','cars','Thars','homes','sports','lords','chords','devils'];

 let ans = prompt('Enter Substances Count in Number ??');

 if(ans > 0){
    console.log(array.slice(0,ans));
 }else{
    console.log('Enter a Positive number to access the things.');
 }