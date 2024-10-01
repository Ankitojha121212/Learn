/**
 * 
 * odd Even factoruy with the higher order functions
 */





const oddOrEven = function(request){
    if(request == "odd"){
        const odd = function(n){
            console.log(!(n%2 == 0));
        }
        return odd;
    }else if(request == "even"){
        const even = function(n){
            console.log(n%2 == 0);
        }
        return even;
    }else{
        console.log("wrong request");
    }
}

let request = oddOrEven("odd");
console.log(request(4));