function outer(){
    var count =0;
     
    return function(){
        count++;
        setTimeout(()=>console.log( count),1000);

    };

}
const fn = outer();
fn();
fn();
fn();