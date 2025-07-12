const myPromise = new Promise((resolve,reject)=>{
    let success= true;

    if(success){
        resolve("promise resolved");

    }
    else{
        reject("Promise rejected");
    }
});

myPromise
   .then(result=> console.log(result))
   .catch(error=>console.log(error));
