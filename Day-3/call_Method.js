const person ={
  FName:"chinmayjagadev",
  LName:"Dash",

  fullName:function(){
    return this.FName+" "+ this.LName;
  }
}

const person2={
    FName:"Deepa",
    LName:"Dash",

}
console.log((person.fullName.call(person2)));
