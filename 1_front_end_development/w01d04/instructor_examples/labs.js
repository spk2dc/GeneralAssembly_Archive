// ---------------------
// Morning lab questions
// ---------------------

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


const calculate = (num1, num2, operation) => {
    if (operation == 'add') {
        return num1 + num2;
    } else if (operation == 'sub') {
        return num1 - num2;
    } else if (operation == 'mult') {
        return num1 * num2;
    } else if (operation == 'div') {
        return num1 / num2;
    } else if (operation == 'exp') {
        return num1 ** num2;
    }
}

console.log(calculate(4, 3, "sub"));
console.log(calculate(4, 3, "exp"));


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


const letterReverse = (str) => {
    // Split into an array of words, reverse each word individually, and rejoin
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('').reverse().join('');
    }
    return words.join(' ');
}

console.log(letterReverse("Luke I am your father"));
console.log(letterReverse("Aren't you a little short for a storm trooper"));


// -----------------------
// Afternoon lab questions
// -----------------------

const calculateCube = (num) => {
    return num ** 3;
}

console.log(calculateCube(5));


const isAVowel = (chr) => {
    // "chr" could be uppercase, so here we convert it to lowercase so we can
    // compare it with just the lowercase vowels.
    chr = chr.toLowerCase();
    return chr == 'a' || chr == 'e' || chr == 'i' || chr == 'o' || chr == 'u';
}

console.log(isAVowel("a"));


const getTwoLengths = (str1, str2) => {
    return [str1.length, str2.length];
}

console.log(getTwoLengths("Hank", "Hippopopalous"));


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


const maxOfThree = (num1, num2, num3) => {
    // If num1 is greater than both num2 and num3, then it's the largest.
    if (num1 > num2 && num1 > num3) {
        return num1;

    // Otherwise, either num2 or num3 is the largest (we don't care about ties).
    // So if num2 is greater than num3, num2 must be the largest.
    } else if (num2 > num3) {
        return num2;

    // And otherwise num3 is the largest.
    } else {
        return num3;
    }
}

console.log(maxOfThree(6, 9, 1));


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


const transmogrify = (num1, num2, num3) => {
    return (num1 * num2) ** num3;
}

console.log(transmogrify(5, 3, 2));


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


const findNeedle = (haystack) => {
    return 'found the needle at position ' + haystack.indexOf('needle');
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));


const positiveSum = (arr) => {
    // Create a new variable that will hold the sum
    let sum = 0;

    // Iterate through each number in our input array
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        // If the number is positive, add it to the sum
        if (num > 0) {
            sum += num;
        }
    }

    // Return the sum
    return sum;
}

console.log(positiveSum([1, -4, 7, 12]));
