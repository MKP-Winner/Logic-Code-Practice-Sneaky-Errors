// 3a. Write a function in JS that greets a user by name.

function greetUser(name) {
    console.log(`Hello, ${name}! Welcome!`);
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter your name: ', (name) => {
    greetUser(name);
    readline.close();
});