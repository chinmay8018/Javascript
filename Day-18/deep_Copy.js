let obj1 ={
    name:"chinmay",
    skils:["js","react"],

};
let obj2=JSON.parse(JSON.stringify(obj1));
obj2.skils.push("Node");

console.log(obj1.skils);
console.log(obj2.skils);