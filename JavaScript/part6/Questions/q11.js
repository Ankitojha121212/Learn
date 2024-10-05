/**
 * 
 * Qs4. Write a JavaScript function to count the number of vowels in a String 
argument. 
 */

function counter(str){
    let count = 0;
    for(let i = 0;i<str.length;i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'|| str[i] == "A" || str[i] == "E" || str[i] == "I" || str[i] == "O" || str[i] == "U"){
            count++;
        }
    }
    return count;
}
console.log(counter("ASDFGGSA"));