
// Bad news to run this code :( because it never stops recursing!
// let callCount = 0;
// const recursiveTest = () => {
//     callCount++;
//     console.log(`we've called recursiveTest ${callCount} times`);
//     recursiveTest();
// }
// recursiveTest();

// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 4 * 3! = 4 * 6 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 5 * 4! = 5 * 24 = 120
// we need a recursive base case!
// how about 0! = 1
const factorial = (n) => {
    // Recursive base case
    if (n === 0) {
        return 1;
    }
    // Recursive call
    return n * factorial(n - 1);
}

// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));

// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// F0 = 0, F1 = 1, Fn = F(n - 1) + F(n - 2)
const fibonacci = (n) => {
    // Recursive base cases
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    // Recursive call
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// fibonacci is O(2^n), exponential. not good!
// console.log(fibonacci(7));
// console.log(fibonacci(8));
// console.log(fibonacci(50));

// Finding the max of [3, 4, 2, 1, 2],
// we can define the max as max(3, the max of the sub-array [4, 2, 1, 2])
// i.e. max(3, findMax([4, 2, 1, 2]))
// or in the general case, max(arr[0], findMax(arr[1..n]))
const findMax = (arr) => {
    // console.log('called findMax with:', arr);
    // Recursive base case: array with just one number, that one number must be the max
    if (arr.length === 1) {
        return arr[0];
    }
    // Recursive work: compare the first number with the max from the rest of the array
    const firstNumber = arr[0];
    const restOfArray = arr.slice(1, arr.length);
    const maxOfRestOfArray = findMax(restOfArray);
    return Math.max(firstNumber, maxOfRestOfArray);
}

// console.log(findMax([2]));
// console.log(findMax([3, 4, 2, 1, 2]));

// This function returns an array of all possible outcomes from flipping a coin N times.
// For example, coinFlips(2) would return the following:
// ["HH", "HT", "TH", "TT"]
// H stands for Heads and T stands for tails
// Represent the two outcomes of each flip as "H" or "T"
const coinFlips = (n) => {
    // Recursive base case: no coin flips
    if (n === 0) {
        return [''];
    }
    // We can define ["HH", "HT", "TH", "TT"] recursively from:
    // -> ["H", "T"] (results from 1 flip)
    // -> [""] (results from 0 flips)
    // Recursive work: look at the results from n - 1 coin flips.
    const prevFlips = coinFlips(n - 1);
    // For each of those results, we can either add a head, or a tail.
    const curFlips = [];
    for (const flip of prevFlips) {
        curFlips.push(flip + 'H');
        curFlips.push(flip + 'T');
    }
    return curFlips;
}

console.log(coinFlips(2));
console.log(coinFlips(3));
