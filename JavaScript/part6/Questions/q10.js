/**
 * 
 * Qs3. Write a JavaScript function that accepts a list of country names as input and 
returns the longest country name as output. 
Example : country = ["Australia", "Germany", "United States of America"] output : 
"United States of America" 
 */

let country = ["Australia","Germany","United States of Americe"];

function longest(arr){
    let ans = 0;
    let str = "";
    for(a of arr){
        if(a.length > ans){
            ans = a.length;
            str = a;
        }
    }
    return str;
}

console.log(longest(country));