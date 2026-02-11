// 2a. Write a program in JS that prints numbers from 1 to 10 using a for loop.

function printNumbersForLoop() {
    console.log("Numbers from 1 to 10:");
    let output = "";
    
    // ERROR: Should be i <= 10, but using i < 10 (only prints 1-9)
    for (let i = 1; i < 10; i++) {
        output += i + " ";
    }
    
    console.log(output);
}

printNumbersForLoop();