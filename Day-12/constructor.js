class person{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    greet(){
        console.log(`hello ${this.name} and I am ${this.age} years old`);
        
    }
}
const person1= new person("chinu",22);
person1.greet();