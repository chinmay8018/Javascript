function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));

}
async function run(){
    console.log("wait for 2 seconds........");
    await delay(2000);
    console.log("done waiting ");
}
run();