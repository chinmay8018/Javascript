const p1= Promise.resolve("one");
const p2 = Promise.reject("two");
const p3= Promise.resolve("three");

Promise.allSettled([p1,p2,p3])
.then(values=>console.log(values))
.catch(error=>console.log(error));