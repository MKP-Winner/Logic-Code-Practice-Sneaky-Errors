// 4c. Create an array of numbers in JS and write a function to find the highest number in the array.

function findHighestNumber(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    
    let highest = numbers[0];
    for (let num of numbers) {
        if (num > highest) {
            highest = num;
        }
    }
    
    return highest;
}

const numberArray = [23, 67, 12, 89, 45, 34, 91, 56];

console.log(`Numbers: ${numberArray}`);
const highest = findHighestNumber(numberArray);
console.log(`The highest number is: ${highest}`);