const person={
    name:"chinnmay",
    greet:function(){
        setTimeout((){
            console.log(this.name);
        },1000);
    }
};
person.greet();
