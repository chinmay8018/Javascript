let promise1 =new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"first");
})

let promise2 =new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"second");

})
let promise3 =new Promise((resolve,reject)=>{
    setTimeout (resolve,3000,"third");
})
Promise.all([promise1,promise2,promise3])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.log("error: "+error)
})