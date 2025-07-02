const person1={
    fullName:function(city,country){
        return this.firstName+" "+this.lastName+" from "+city+","+country;

    }
    
};
const person2={
    
    firstName:"chinmay",
    lastName:"dash"
        
    };

const result = person1.fullName.apply(person2, ["Bhubaneswar","India"]);
console.log(result);