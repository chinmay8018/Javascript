let user1 ={
    name:"chinmay",
    age:"21",
    address:{
        city:"puri"

    }
};
let user2=Object.assign({},user1);
user2.address.city="BBSR";

console.log(user1.address.city)
console.log(user2.address.city);