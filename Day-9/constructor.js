function person(name,age){
    this.name=name;
    this.age=age;
}

let person1= new person("Chinmay",22);
console.log(person1.name);
console.log(person1.age);