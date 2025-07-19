const p1 =Promise.reject("fail 1");
const p2= Promise.resolve("Pass 1");
const p3=Promise.reject("fail 2");

Promise.any([p1,p2,p3])
.then(value=>console.log(value));
