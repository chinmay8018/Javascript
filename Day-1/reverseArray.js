function reverse(arr){
        let result =[];
        for (let i = arr.length -1; i>=0;i--)
        result.push(arr[i]);
        return result;

    }

    console.log(reverse([1,2,4,3,5,6]));