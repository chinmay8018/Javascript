console.log("Start of script");

setTimeout(()=>{
    console.log("This setTimeout");
    
});
Promise.resolve().then(()=>{
    console.log("This is a promise");
    
});

console.log("end of the code");

