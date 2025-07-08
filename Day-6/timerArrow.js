function Timer(){
    this.seconds =0;

    setInterval(()=>{
        this.seconds++;
    },1000);
}
const myTimer= new Timer();

setInterval(()=>{
    console.log("second passed",myTimer.seconds);
},1000);