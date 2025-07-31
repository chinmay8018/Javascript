function outer(){
    let name="chinu";
    function inner(){
        console.log(name);
    }
    return inner;
}
let inner2=outer();

inner2();