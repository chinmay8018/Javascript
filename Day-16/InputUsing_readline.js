const readline = require("readline");

class NumberPrinter{
    printNumber(){
        const rl = readline.createInterface({
            input:process.stdin,
            output:process.stdout
        });
        rl.question("Enter a number:",(input)=>{
            const num = parseInt(input);
            console.log("You Entered",num);
            rl.close();
        });
    }
}

const obj= new NumberPrinter();
obj.printNumber();