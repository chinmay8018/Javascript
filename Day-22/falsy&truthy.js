let values=[0,"",null,undefined,NaN,false,"0",[],{}];
values.forEach(val=>{
    if(val){
        console.log(`${val} is truthy`);
    }
    else{
        console.log(`${val}is falsy`);
    }
});

console.log(true+false);