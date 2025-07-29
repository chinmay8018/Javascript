const FetchData=()=>{
    return new Promise((resolve,reject)=>{
        const error=true;
        if(error) reject("Faild to fetch");
        else resolve("Data recived"); 
    });
};
FetchData().then(console.log).catch(console.error);