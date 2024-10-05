/**
 *  Qs5. Write a function called mergeObjects that accepts two objects and returns a new
 object which contains all the keys and values of the first object and second object.
 */

 function mergeObjects( obj1, obj2){
    return {...obj1, ...obj2};
    
 }

 const st1 = {
    name : "Ankit Ojha",
    age : 21
 };

 const st2 = {
    name : "Alpha delfa",
    age : 41
 };

 let ans = mergeObjects({st1},{ st2});

 console.log(ans);