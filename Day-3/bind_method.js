const person ={
    firstName:"chinnmay",
    lastName:"dash"
};
function greet(greeting){
    console.log(`${greeting},${this.firstName}${this.lastName}`);

}

const greetChinmay = greet.bind(person);
 greetChinmay("Hello");