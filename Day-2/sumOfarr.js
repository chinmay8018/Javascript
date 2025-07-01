function arraySum(arr){
    let sum=0;
    for (let num of arr){
        sum+=num;
    }
    return sum;

}
console.log(arraySum([1,2,3,4]));

output:10
