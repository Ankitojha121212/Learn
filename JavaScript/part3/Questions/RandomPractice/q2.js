/**
 * Return the index of the "javaScript" from the given array, if it was reversed
 * 
 *  ['c','c++','html','javascript','python','java','c#','sql'];
 */

let array = ['c','c++','html','javascript','python','java','c#','sql'];

console.log(array.reverse().indexOf('javascript'));


array.sort();
console.log(array.indexOf('javascript')); //5
console.log(array);


