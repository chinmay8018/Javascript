const user= {
    name:"Alice",
    greet:()=>{
        console.log(`Hello,${this.name}`);
    }
};
user.greet();