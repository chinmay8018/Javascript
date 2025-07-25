function Person(name){
    this.name=name;

}
Person.prototype.sayHello=function(){
    console.log("Hi,I'm"+this.name);
};
const p1= new Person("Chinmay");
p1.sayHello();

console.log(p1.__proto__===Person.prototype);