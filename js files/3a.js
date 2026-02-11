// 3a. Write a function in JS that greets a user by name.

function greetUser(name) {
    console.log(`Hello, ${name}! Welcome!`);
}

const name = prompt("Enter your name:");

if (name) {
    greetUser(name);
} else {
    console.log("No name entered.");
}
