function reverseArray(arr){
    let start =0,end=arr.length-1;

    while (start<end){
        let temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }
    return arr;

}
console.log(reverseArray([1,2,3,4,5,6,7,8,9,0]));

output[0,9,8,7,6,5,4,3,2,1]
