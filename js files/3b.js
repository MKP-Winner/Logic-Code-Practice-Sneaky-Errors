// 3b. Write a function in JS that checks if a number is even or odd

function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a number: ', (input) => {
    const num = parseInt(input);
    const result = isEvenOrOdd(num);
    console.log(`${num} is ${result}`);
    readline.close();
});