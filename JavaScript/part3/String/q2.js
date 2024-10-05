/**
 * for the string 
 * let name = "ApnaCollage"
 * 
 * predict the output of the following 
 * 
 * name.slice(4,9)                                        // "Collag"
 * name.indexOf("na")                                     // 2
 * name.replace("Apna","Our")                             // OurCollage
 * 
 *  */

// Seperate the "Collage" part in above string & replace 'l" with with 't' in it

let name = "ApnaCollage";

let sliced = name.slice(4,name.length);

console.log(sliced.replace('l','t').replace('l','t'));