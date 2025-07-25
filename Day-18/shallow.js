let obj ={
    name:"chinmay",
    skils:["js,React"]
};


let obj2 = Object.assign({},obj);

obj.name="Dash";
obj.skils.push("Node");

console.log(obj);
console.log(obj2)