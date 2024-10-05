/**
 * for the given start state of an array , change it to final form using splice
 * 
 *    start : ['january','july','march','august'];
 *    final : ['july','june','march','august'];
 * 
 */

let start = ['january','july','march','august'];

console.log(start);

start.splice(0,2,"july","june");
console.log(start);