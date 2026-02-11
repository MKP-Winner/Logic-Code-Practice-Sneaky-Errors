// 2c. Write a program in JS that calculates the factorial of a given number using a loop.

function calculateFactorial() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Enter a number to calculate its factorial: ', (input) => {
        const number = parseInt(input);
        
        if (number < 0) {
            console.log("Factorial is not defined for negative numbers");
            readline.close();
            return;
        }
        
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        
        console.log(`The factorial of ${number} is ${factorial}`);
        readline.close();
    });
}

calculateFactorial();