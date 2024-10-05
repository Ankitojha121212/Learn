/**
 * 
 * Qs2. Write a JavaScript function to extract unique characters from a string. 
Example: str = “abcdabcdefgggh” ans = “abcdefgh” 
 */

let str = "nnmsksldkdkdmdkdkdm2343212`23abcdabcdefgggh";

function unique(string){
    let ans = "";
    for(let i = 0;i<string.length;i++){
      if(ans.includes(string[i])){
        continue;
      }else{
        ans = ans.concat(string[i]);
      }
    }
    return ans;
}

console.log(unique(str));