function person(name){
    this.name=name;
    
};
person.prototype.sayHello =function(){
    console.log("Hello,"+this.name);
};
const p1= new person("chinmay");
p1.sayHello();
