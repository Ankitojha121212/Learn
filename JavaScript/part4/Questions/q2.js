/***
 * 
 * Qs2.WriteaJSprogramtofindthenoofdigitsinanumber.
 Example: ifnumber=287152,count=6
 */

 let number = 23412323;
let n = number;
 let count = 0;
 while(n > 0){
    n = Math.floor(n/10);
    count++;
 }
 console.log(count);