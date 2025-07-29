const task =(name,time)=> new Promise((res)=>setTimeout(()=>res(name),time));

async function runTasks(){
    const results= await Promise.all([
        task("task1",1000),
        task("task2",500),
        task("task3",1500),
    ]);
    console.log(results);
}
runTasks();