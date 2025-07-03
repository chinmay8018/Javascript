const obj={
    name:"chinmay",
    age:21,
    adress:{
        city:"BBSR",
        state:"odisha"
    },
};
const shallow={...obj };

shallow.adress.city="cuttack";

console.log(obj.adress.city)
 