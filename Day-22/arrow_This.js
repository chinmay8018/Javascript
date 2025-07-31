let user={
    name:"chinmay",
    greet:function(){
        setTimeout(()=>{
            console.log("hi"+this.name);
        },1000);
    }
}
user.greet();