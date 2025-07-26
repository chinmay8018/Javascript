let promise1=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Promise Fulfilled");

    }
    else{
        reject("promise rejected")
    }
});
promise1.then((message) =>{
    console.log("Then ka message is" + message);

}).catch((error)=>{
    console.log("Error:" + error);
}).finally((message)=>{
    console.log("done")
})