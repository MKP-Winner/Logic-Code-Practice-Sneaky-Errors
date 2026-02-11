// 2a. Write a program in JS that prints numbers from 1 to 10 using a for loop.

function printNumbersForLoop() {
    console.log("Numbers from 1 to 10:");
    let output = "";
    
    for (let i = 1; i < 10; i++) {  // Logical error: should be <= 10
        output += i + " ";
    }
    
    console.log(output);
}

printNumbersForLoop();
