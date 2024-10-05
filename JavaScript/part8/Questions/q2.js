/**
 * check if all numbers in our array are multiple of 10 or not.
 */

let arr = [ 10,50,20,30,40,50];

let ans = arr.every(n => n%10 == 0);

console.log(ans);