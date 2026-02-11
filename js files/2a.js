// 2a. Write a program in JS that prints numbers from 1 to 10 using a for loop.

function printNumbersForLoop() {
    console.log("Numbers from 1 to 10:");
    let output = "";
    
    // FIXED: Changed i < 10 to i <= 10 to include 10
    for (let i = 1; i <= 10; i++) {
        output += i + " ";
    }
    
    console.log(output);
}

printNumbersForLoop();