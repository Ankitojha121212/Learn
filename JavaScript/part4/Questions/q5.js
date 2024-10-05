/**
 * 
 * Qs5.Findthelargestnumberinanarraywithonlypositivenumbers.
 */

let arr=[23,234,2,4,234,55,32,24,322,44,244,22,442];
let largest = arr[0];
for(let i = 0;i<arr.length;i++){
    if(arr[i] > largest){
        largest = arr[i];
    }

}
console.log(largest);