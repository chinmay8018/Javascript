let delayed = new Promise((resolve,reject)=>{
    setTimeout(()=> {
        resolve("sucess");
    },2000);
})

delayed.then(msg=>console.log(msg));