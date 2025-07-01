function moveZero(arr){
    let nonZero=0;

    for (let i=0;i<arr.length;i++){
        if (arr[i]!==0){
            arr[nonZero++]=arr[i];
        }
    }
    while(nonZero<arr.length){
        arr[nonZero++]=0;
    }
    return arr;

}
console.log(moveZero([0,0,1,2,34,5,6,7]));

output:[1,2,34,5,6,7,0,0]