function delay(ms){
    return new Promise((resolve)=> setTimeout(resolve,ms));

}
async function run(){
    console.log("start");
    await delay(2000);
    console.log("End");
}
run();