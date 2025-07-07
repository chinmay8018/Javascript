const promise = new Promise((resolve,reject)=>{
    const isSuccess = Math.random()>0.5;

    if(isSuccess){
        resolve("Operation successfull");

    }
    else{
        reject("Opertation faild");

    }
})
promise.then((result)=>console.log("result",result));
promise.catch((error)=>console.log("error",error));