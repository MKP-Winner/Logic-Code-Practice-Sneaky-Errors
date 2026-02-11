// 4a. Write a program in JS that stores a list of fruits and prints each fruit using a loop.

function displayFruits() {
    const fruits = ["Apple", "Banana", "Orange", "Mango", "Strawberry"];
    
    console.log("List of fruits:");
    for (let fruit of fruits) {
        console.log(`- ${fruit}`);
    }
}

displayFruits();