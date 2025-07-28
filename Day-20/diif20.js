function testhundred(x){

    return ((Math.abs (100-x)<=20)||(Math.abs (400-x)<=20));

}
console.log(testhundred(10));
console.log(testhundred(90));
console.log(testhundred(150));
console.log(testhundred(200));
console.log(testhundred(300));
console.log(testhundred(380));
console.log(testhundred(400));
console.log(testhundred(900));
console.log(testhundred(250));
console.log(testhundred(370));
