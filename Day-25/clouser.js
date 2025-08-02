function outer(){
    let counter=0;
    return function() {
        counter++;
        return counter;
    };

}
const count = outer();
console.log(count());
console.log(count());