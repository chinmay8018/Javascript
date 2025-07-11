function WaitTwoSeconds(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("done after 2 second");
        },2000);
    });
}
async function callme(){
    console.log("waiting");
    const result=await WaitTwoSeconds();
    console.log("Result:",result);
}
callme();