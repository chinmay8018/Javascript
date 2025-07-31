// function counter(){
//     let count=0;
//     return function(){
//         count++;
//         return count;
//     };
// }
// const c= counter();
// console.log(c());
// console.log(c());

// var a = 10;
// var b;
// console.log(a);
// console.log(b);
// function display() {
// var x = 5;
// console.log(x);
// }
// display();

//console.log(a);
// //console.log(b);
// display();
// //var a = 10;
// //var b;
// function display() {
// var x = 5;

// console.log(x);
// }

// console.log(a);
// console.log(b);
// var a = 10;
// function display() {
// var x = 5;
// console.log(x);
// }

// function foo() {
// console.log(i)
// for (var i = 0; i < 3; i++) {
// console.log(i)
// }
// }
// foo();


const array1 = [1, 2, 3, 4, 5];
for(var i = 0; i < array1.length; i++) {
console.log(array1[i])
setTimeout(() => {
console.log(i);
console.log(array1);
})
}