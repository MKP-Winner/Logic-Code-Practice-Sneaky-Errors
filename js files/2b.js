// 2b. Write a program in JS that prints numbers from 1 to 5 using a while loop.

function printNumbersWhileLoop() {
    console.log("Numbers from 1 to 5:");
    let output = "";
    let i = 1;
    
    while (i <= 5) {
        output += i + " ";
        i++;
    }
    
    console.log(output);
}

printNumbersWhileLoop();