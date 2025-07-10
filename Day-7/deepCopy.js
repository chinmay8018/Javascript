let employee={
    name:"chinmay",
    age:"21",
    eID:121,
    adress:"cuttack",

}
let newEmployee=JSON.parse(JSON.stringify(employee));


newEmployee.name="chinu"

console.log(newEmployee);
console.log(employee);
