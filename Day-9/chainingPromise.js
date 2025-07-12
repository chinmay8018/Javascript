function asynTask1(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("Task 1 done"),1000);
    });
}
function asyncTask2(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("Task 2 done"),1000);
    });
}

asynTask1()
.then(result=>{
    console.log(result);
    return asyncTask2();
})
.then(result=>console.log(result));