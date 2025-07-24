class NumberPrinter{
    printNumber(){
        const num = parseInt(prompt("Enter a number"));
        console.log("You entered",num); 
    }
}
const obj=new NumberPrinter();
obj.printNumber();