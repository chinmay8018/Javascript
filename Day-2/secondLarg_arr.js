function secondLargest(arr){
    let first = -Infinity;
    let second=-Infinity;

    for (let num of arr){
        if(num>first){
            second=first;
            first=num;

        }
        else if(num>second && num !== first){
            second=num;
        }
    }
    return second;
}
console.log(secondLargest([1,2,3,4,5,6,7,8,9]));
