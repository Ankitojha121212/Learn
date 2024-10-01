/**
 * 
 *  Q  write a function which will return the sum of 1 to n
 */


function sum(n) {
    let summ = 0;
    for(let i = 1;i<=n;i++){
        summ += i;
    }

    return summ;
}

console.log(sum(23));