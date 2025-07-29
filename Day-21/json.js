let user={
    name:"chinmay",
    age:"21"
}
let jsonstr=JSON.stringify(user);
console.log(jsonstr)
const obj= JSON.parse(jsonstr);
console.log(obj);

console.log("start");
setTimeout(()=>{
    console.log("helllo")
},1000);
console.log("end");