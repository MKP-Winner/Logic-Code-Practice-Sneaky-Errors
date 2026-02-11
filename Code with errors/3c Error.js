// 3c: Write a function in JS that accepts a string and returns the number of vowels in the string

function countVowels(text) {
    const vowels = "aeiaoAEIAO";
    let count = 0; 

    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

const userInput = prompt("Enter a string:");

const vowelCount = countVowels(userInput);

console.log(result);
