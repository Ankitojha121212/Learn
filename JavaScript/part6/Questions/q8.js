/**
 * 
 * Qs1. Write a JavaScript function that returns array elements larger than a number. 
 */


let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const large = function(arr,number){
    let arrOut = [];
    for(let i = 0;i<arr.length;i++){
        if(arr[i] > number){
            arrOut.push(arr[i]);
        }
    }
    return arrOut;
}

console.log(large(arr1,3));