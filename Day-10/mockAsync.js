function fetchData(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve({name:"chinu",age:22});
        },2000);
    });
}
async function showUser(){
    console.log("fetching user........");
    const user = await fetchData();
    console.log(user);
    
}
showUser();