/**
 *  Create a function to find the min number in an array
 */



function getMin(arr){
    const mini = arr.reduce((min,ele) =>{
        if(min > ele){
            return ele;
        }else{
            return min;
        }
    })
    return mini;
}

let arr = [23,4,2,4,2,1,4];



console.log(getMin(arr));


























// const minn = (arr) =>{
//     let mini = 1000000000000000;
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] < mini){
//             mini = arr[i];
//         }
//     }
//     return mini;
// }
// console.log(minn([23,34,2,5,3,211,45,2]));