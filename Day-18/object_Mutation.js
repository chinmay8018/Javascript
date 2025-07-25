let user1 ={
    name:"Chinmay",
    address:{
        city:"kjr"
    }
};
let user2={...user1};
user2.address.city="BBSR";

console.log(user1.address.city);
console.log(user2.address.city)
