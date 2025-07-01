function missingNumber(arr,n){
    let total =(n*(n+1))/2;
    let sum=0;
   for (let num of arr){
    sum+=num;

   }
   return total-sum;
}
console.log(missingNumber([1,2,4,5,6],6));

output:3