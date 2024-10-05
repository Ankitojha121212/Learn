/**
 * 
 *  Write a function which will return's the concatination of all index of an array
 */

let arr = ["Ankit","Alpha","Mein","sher","chintu","Microsoft","FAANG"];
let ans="";
function concatination(arr){
    for(idx of arr){
       ans =  ans.concat(" ").concat(idx);
    }
    return ans;
}
console.log(concatination(arr));