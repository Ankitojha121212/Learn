/**
 * 
 *   Add a <p> with red text that says "Hey I am in Red!!"
 * 
 *      an <h3> with blue text that says "hey I am in Blue";
 * 
 *      a <div> with a black border and a pink background color with the following elements inside of it
 * 
 *          another <h1> says  "I am in a div";
 * 
 *          a <p> says "ME Too!!"
 */


// Creating the Red paragraph element
let p = document.createElement('p');
 p.innerText = "Hey I am in Red !!";

 document.querySelector('body').append(p);

 p.classList.add('red');


 /// Creating the blue h3 element with text

 let h3 = document.createElement('h3');
 h3.innerText = "Hey I am in Blue !!";

 document.querySelector('body').append(h3);

 h3.classList.add("blue");


 // Creating a div  with border

 let div = document.createElement('div');
 div.classList.add('div');


 // creating the h1 element 
 let h1 = document.createElement('h1');
 h1.innerText = "I am in a div";
 
 // creating the p element

 let para = document.createElement('p');
 para.innerText = "Me Too !!";


 // adding into the div

 document.querySelector('body').append(div);
 document.querySelector('div').append(h1,para);