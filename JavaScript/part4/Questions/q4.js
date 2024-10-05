/**
 * 
 *  Qs4.Printthefactorialofanumbern.
 [Factorialofanumbernistheproductofallpositiveintegerslessthanorequal toa
 givenpositiveintegeranddenotedbythat integer.]
 Example:
 7!(factorialof7)=1x2x3x4x5x6x7=5040
 5!(factorialof5)=1x2x3x4x5=120
 3!(factorialof3)=1x2x3=6
 0!Isalways1
 */

 const num = 5;

 let sum = 1;
 for(let i = num;i>0;i--){
        sum *= i;
 }
 console.log(sum);