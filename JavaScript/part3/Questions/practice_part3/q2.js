/**
 * Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
 positive number].
 For example: for array [7, 9, 0,-2] and n=3
 Print, [9, 0,-2]
 */

 const array = [7,9,0,-2,3,344,32,244,2,44,];

 let n = prompt('Enter positive number');
 console.log(array.slice(-n));