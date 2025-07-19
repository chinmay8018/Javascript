const p1= new Promise(res=>setTimeout(res=>("one"),1000));
const p2= new Promise(res=>setTimeout(res=>("two"),2000));


Promise.race([p1,p2])
.then(value=>console.log(value))
//.catch(value=>console.log("error"));
