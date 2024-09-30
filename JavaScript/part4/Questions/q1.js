/**
 * 
 * Qs1.WriteaJSprogramtodeletealloccurrencesofelement ‘num’ inagivenarray.
 Example: ifarr=[1,2,3,4,5,6,2,3]&num=2
 Resultshouldbearr=[1,3,4,5,6,3]
 */

 let num = 22;
 const arr = [1,2,3,45,5,3,22,4,2,48,7,8,99,7,78,2];
 console.log(arr.length);

 for(let i = 0;i<arr.length;i++){
    if(arr[i] == num){
        arr.splice(i,1);
    }
 }
 console.log(arr);
 console.log(arr.length);