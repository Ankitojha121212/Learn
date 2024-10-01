/**
 *  Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers
 */

const arrayAverage = (arr) =>{
    let avg = 0;
    for(a of arr){
        avg += a;
    }
    return avg/(arr.length);
}

console.log(arrayAverage([1,2,3,4,5]));