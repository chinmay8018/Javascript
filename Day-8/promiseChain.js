const myPromise = new Promise((resolve,reject)=>{
    const sucess= false;

    if(sucess){
        resolve("promise resolved sucessfully");

    }
    else{
        reject("promise rejected");

    }
});

myPromise
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
});