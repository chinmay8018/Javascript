function greet(name,callback){
    console.log("hi"+name);
    callback();

}
function saybye(){
    console.log("bye");

}
greet("chinmay",saybye);