const obj ={
    count:0,
    increment:function (){
        setInterval(()=>{
            this.count++;
            console.log(this.count);
        },1000);
    }
};
obj.increment();