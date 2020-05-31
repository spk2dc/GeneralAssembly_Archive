/*
VERBAL QUESTIONS
1. An argument is the value you pass into a method call. A parameter is the value passed into the method as an input. 
2. console log prints to the terminal, but return sends a value back to whatever called the function.

*/

//PALINDROME

let checkPalindrome = (str) => {
    let strLow = str.toLowerCase();
    for (let i = 0; i < strLow.length / 2; i++) {
        if (strLow.charAt(i) != strLow.charAt(strLow.length - 1 - i)) {
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));

//SUM ARRAY
let sumArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];

    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

//PRIME NUMBERS



//ROCK PAPER SCISSORS