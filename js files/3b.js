// 3b. Write a function in JS that checks if a number is even or odd

function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

const input = prompt("Enter a number:");
const num = parseInt(input);

if (isNaN(num)) {
    console.log("Please enter a valid number.");
} else {
    const result = isEvenOrOdd(num);
    console.log(`${num} is ${result}`);
}
