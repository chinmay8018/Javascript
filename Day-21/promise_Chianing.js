const fetchData=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Step 1: Data fetched");
        },1000);
    });
};
fetchData()
.then((data)=>{
    console.log(data);
    return "step 2: Processing data";
})
.then((processed)=>{
    console.log(processed);
    return"step 3: done";
})
.then((final)=>{
    console.log(final);
})
.catch((err)=>{
    console.error("Error",err);
});