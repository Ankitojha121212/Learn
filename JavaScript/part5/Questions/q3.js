/**
 * 
 *  Qs3. Create an object Person with their name, age and city.
 Edit their city’s original value to change it to “New York”.
 Add a new property country and set it to the United States
 */


 const Person = {
    name : "Ankit",
    age : 21,
    city : "jaipur"
 };

 console.log(Person);
 Person.city = "New York";
console.log("city changed");
 console.log(Person);

 Person.country = "United States";
console.log("country Added");
 console.log(Person);