// const a = 50;

// module.exports = a;

//////////////////////////
// Way 2

const PI = 3.14;
const add = (a,b) =>{
   return a+b;
}

const sub = (a,b) =>{
    return a-b;
}

const mul = (a,b) => a*b;

const div = (a,b) => a/b;

// const obj = {
//     PI : PI,
//     add : add,
//     sub : sub,
//     mul : mul,
//     div : div
// };

// module.exports = obj;


/// Way 3

module.exports = {
        PI : PI,
    add : add,
    sub : sub,
    mul : mul,
    div : div
};


//////////// Way 3

module.exports.a = 50;
module.exports.modulo = (a,b) => a%b;


////// way 4

exports.b = 50;

// not a valid     exports = 40;
