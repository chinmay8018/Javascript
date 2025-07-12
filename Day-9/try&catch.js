async function getdata(){
    try{
        let result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await result.json();
        console.log(data);

    }catch(err){
        console.log("Error ",err);
    }

}
getdata();