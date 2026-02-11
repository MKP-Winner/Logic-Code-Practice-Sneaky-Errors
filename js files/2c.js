// 2c. Write a program in Python that calculates the factorial of a given number using a loop.

function calculateFactorial() {
    const input = prompt("Enter a number to calculate its factorial:");
    const number = parseInt(input);

    if (isNaN(number)) {
        console.log("Please enter a valid number.");
        return;
    }

    if (number < 0) {
        console.log("Factorial is not defined for negative numbers.");
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    console.log(`The factorial of ${number} is ${factorial}`);
}

calculateFactorial();
