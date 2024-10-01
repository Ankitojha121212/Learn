/**
 *  Write a function that prints "Hello World" 5 times at interval of each 2'second
 * 
 */



    let id = setInterval(()=>{
        console.log("Hello World");
    },2000);


    setTimeout(()=>{
        clearInterval(id);
        console.log("Clear interval run");
    },11000);