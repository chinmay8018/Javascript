let promise = new Promise ((resolve,reject)=>{
    resolve("sucess");

});

promise.then(result=>{
    console.log(result)
});