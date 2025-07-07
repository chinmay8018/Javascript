const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("sucess");

    },2000);
})
promise.then((message)=> console.log(message));