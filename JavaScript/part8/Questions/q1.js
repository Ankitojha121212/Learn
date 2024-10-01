/**
 * Write a program by reduce method to find the maximum in an array
 */

let arr = [ 234,3,2,4,4,22,244,3333,4,5,3,3,3,3,33,3];
let maxi = arr.reduce((max,ele) =>{
    if(ele > max){
        return ele;
    }else{
        return max;
    }
})

console.log(maxi);