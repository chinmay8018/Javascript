class car{
    constructor(brand,model){
        this.brand=brand;
        this.model=model;

    }
    showdetails(){
        console.log(`Brand: ${this.brand},model: ${this.model}`);
    }
}
const car1 =new car("Toyota","camry");
car1.showdetails();