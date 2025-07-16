class animal{
    constructor(name){
        this.name=name;

    }
    sound(){
        console.log(`${this.name} makes a sound`);
    }
}
class Dog extends animal{
    bark(){
        console.log(`${this.name}barks`);
    }
}
const dog1 = new Dog("puppy");
dog1.sound();
dog1.bark();