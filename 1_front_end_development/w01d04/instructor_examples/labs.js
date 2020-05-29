const printGreeting = (name) => {
    return 'Hello there, ' + name + '!';
}

console.log(printGreeting("Slimer"));

const reverseWordOrder = (str) => {
    let words = str.split(' ');
    let reversedWords = words.reverse();
    let joinedWords = reversedWords.join(' ');
    return joinedWords;
}

console.log(reverseWordOrder("Ishmael me Call"));
console.log(reverseWordOrder("I use Lâncome on my comb"));

const printConsecutives = (numbers) => {
    for (let i = 0; i < numbers.length - 2; i++) {
        let num1 = numbers[i];
        let num2 = numbers[i + 1];
        let num3 = numbers[i + 2];
        if (num1 == num2 - 1 && num2 == num3 - 1) {
            console.log(num1 + ' ' + num2 + ' ' + num3);
        }
    }
}

printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]);
printConsecutives([0, 0, 0, -3, -2, -1, 0, 1, 2, 3]);

const getMultipleLengths = (strs) => {
    // Create a new array that will hold the string lengths
    let stringLengths = [];

    // Iterate through each string in our input array
    for (let i = 0; i < strs.length; i++) {
        // Push the length of each string into our array of lengths
        stringLengths.push(strs[i].length);
    }

    // Another way to write this loop, without using an index:
    // for (let currentStr of strs) {
    //     stringLengths.push(currentStr.length);
    // }

    // Return the array of lengths
    return stringLengths;

    // Another way to solve this problem, in one crazy line:
    // return strs.map(s => s.length);
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

const printLongestWord = (strings) => {
    let longestWord = strings[0];
    for (let i = 1; i < strings.length; i++) {
        if (strings[i].length > longestWord.length) {
            longestWord = strings[i];
        }
    }
    return longestWord;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

const evenFibonaccis = (n) => {
    let evenFibs = [];
    // 0, 1, 1, 2, 3, 5, ...
    let f1 = 0;
    let f2 = 1;
    let f3 = 1;
    while (f3 <= n) {
        f1 = f2;
        f2 = f3;
        f3 = f1 + f2;
        console.log(f3);
        if (f3 % 2 == 0) {
            evenFibs.push(f3);
        }
    }
    let sum = 0;
    for (let i = 0; i < evenFibs.length; i++) {
        sum += evenFibs[i];
    }
    return sum;
}

console.log(evenFibonaccis(4000000));