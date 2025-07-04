const obj={
    name:"chinmay",
    adress:{
        city:"Bhubaneswar",
        state:"odisha"
    }
};

const deep=JSON.parse(JSON.stringify(obj));

deep.adress.city="cuttack";

console.log(obj.adress.city);
