const original={
    name:"chinmay",
    age:"21",
}
const copy =Object.assign({},original);

copy.name="Bob";
console.log(original);
console.log(copy);