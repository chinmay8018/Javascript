function Timer(){
    this.seconds = 0;
    setInterval(()=> {
        this.seconds++;
    },10000);
}
console.log(Timer)