function getData(dataID,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataID);
            resolve("sucess");
            if (getNextData){
                getNextData();
            }

        },5000);
    });
}