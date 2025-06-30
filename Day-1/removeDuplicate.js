 function remove(arr){
        return [new Set(arr)];
    }
const input = [1, 2, 2, 3, 4, 4, 5];
const output = remove(input);
console.log(output);