// 3c: Write a function in JS that accepts a string and returns the number of vowels in the string

function countVowels(text) {
    const vowels = "aeiaoAEIAO";
    const count = 0;
    
    for (let char of text) {
        if (vowels.includes(char)) {
            count++; 
        }
    }
    
    return result; 
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a string: ', (userInput) => {
    const vowelCount = countVowels(userInput; // Missing ')'
    console.log(`The string '${userInput}' contains ${vowelCount} vowels`);
    readline.close();
});