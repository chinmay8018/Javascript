function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
async function greet(){
    console.log("start");
    await delay(1000);
    console.log("hello after 1 second");
}

greet();