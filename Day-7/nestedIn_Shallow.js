// const original ={
//     name:"chinu",
//     details:{
//         age:21,

//     }
// }
// const copy = Object.assign({},original);

// copy.details.age=22;
// console.log(original,copy);

let original = {
  name: "John",
  info: {
    city: "New York"
  }
};

let copy = Object.assign({}, original);
copy.name = "Alice";
copy.info.city = "Los Angeles";

console.log(copy);         // "John"          ✅ NOT affected
console.log(original);    // "Los Angeles"   ❌ Affected!
