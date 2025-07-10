let original={
     name:"jhon",
     contact:{
        phone:"123344444",
        email:"chinmmay",
     }
}

let copy = JSON.parse(JSON.stringify(original));

copy.contact.phone="9827441260"
console.log(original);
console.log(copy);