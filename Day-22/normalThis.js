const user={
    name:"chinmay",
    greet:function(){
        setTimeout(function() {
            console.log("Hi,"+this.name);
        }, 1000);
    }
};
user.greet();