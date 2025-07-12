function step1(callback){
    setTimeout(()=>{
          console.log("step 1 complete");
          callback();
    },1000);
}

function step2(callback){
    setTimeout(()=>{
        console.log("step 2 completed");
    },1000);

}
function step3(callback){
    setTimeout(()=>{
        console.log("step 3 completed");
    },1000);

}
function step4(){
    setTimeout(()=>{
        console.log("step 4 completed");
    },1000);

}

step1(()=>{
    step2(()=>{
       step3(()=>{
        step4();
       });
    });
});