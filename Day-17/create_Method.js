const p1={
    fname:"chinmay",
    lanme:("dash"),
    fullname(){
        return `${this.fname} ${this.lanme}`;
    }
};
const p2 = Object.create(p1);
console.log("p1 is",p1);
console.log("p2 is",p2.lname);
p2.__proto__.fname='Hack';

console.log("p1 after is ", p1.fname);