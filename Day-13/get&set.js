class student{
    #name="chinmay";
    
    get name(){
        return this.#name
    }
     set name(value){
        this.#name= value;


     }
}
const s1= new student();

console.log(s1.name);
