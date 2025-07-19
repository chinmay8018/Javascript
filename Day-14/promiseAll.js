// const p1=  Promise.resolve("one");
// const p2=  Promise.resolve("two");
// const p3 =  Promise.resolve("three");

// Promise.all(p1,p2,p3).then(values=>{
//     console.log(values)
// })
// Promise.all(p1,p2,p3).catch(error=>{
//     console.log("error",error)
// });
const p1 = Promise.resolve("One");
const p2 = Promise.resolve("Two");
const p3 = Promise.resolve("Three");

Promise.all([p1, p2, p3])
.then(values => console.log(values))
.catch(error=>  console.log("faild pormise"));  // ["One", "Two", "Three"]

