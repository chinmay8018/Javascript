function Fun(){
    return Promise.resolve("sucesss");
}
async function myName() {
    

    try{
        const result= await Fun();
        console.log('Result:',result);

    }catch(error){
        console.error('Errror:',error);
    }
    
}
myName();
