let task = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("sucsess");
    },2000);

})
task.then(msg=>console.log(msg));
task.catch(msg=>console.log(msg));
task.finally(msg=>console.log("he code executed successfully"));