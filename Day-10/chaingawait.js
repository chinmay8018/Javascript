function step(msg,delayTime){
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log(msg);
            resolve();
        },delayTime)
    });
}
async function runSteps(){
    await step("step1",1000);
    await step("step1",1000);
    await step("step1",1000);
    console.log("all steps done");
}
runSteps();