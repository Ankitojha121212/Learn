/**
 * 
 * 
 *  Qs3.WriteaJSprogramtofindthesumofdigitsinanumber.
 Example: ifnumber=287152,sum=25
 */

 let number = 287152;
 let sum = 0;

 while(number > 0){
    let ld = number % 10;
    sum += ld;
    number = Math.floor(number/10);
 }

 console.log(sum);