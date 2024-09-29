let n = 9;
let prime = true;

for(let i = 2;i<=Math.sqrt(n);i++){
    if(n%i == 0){
        prime = false;
    }
}
console.log(prime);