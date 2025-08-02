const person={
    name:'jhon',
    greet: function(){
        return `hi,I am ${this.name}`;
    }
};
const greet =person.greet;
console.log(greet());