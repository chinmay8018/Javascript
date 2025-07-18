  class Human{
    age=13;//public
    #wt=80;//private
    ht=180;//public 

    walking(){
        console.log("i am walking",this.#wt);

    }
    running(){
        console.log("I am running");

    }

    get fetchWeight(){
        return this.#wt;
    }
    set ModifyWeight(val){
        this.#wt=val;
    }
  }
  let obj =new Human();
  console.log(obj.age);

  obj.walking();