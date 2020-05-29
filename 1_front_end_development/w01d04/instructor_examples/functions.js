let printsum = () => {
    console.log(10 + 10);
}

//printsum();


let printGreeting = (input) => {
    return "Hello there, " + input + "!";
}

//console.log(printGreeting("Slimer"));

let reverseWordOrder = (input) => {
    let arr = input.split(" ");
    arr.reverse();
    return arr;
}
//console.log(reverseWordOrder("Ishmael me Call"));
//console.log(reverseWordOrder("I use Lâncome on my comb"));

let calculate = (num1, num2, oper) => {
    if (oper == "add") {
        return num1 + num2;
    } else if (oper == "sub") {
        return num1 - num2;
    } else if (oper == "mul") {
        return num1 * num2;
    } else if (oper == "div") {
        return num1 / num2;
    } else if (oper == "exp") {
        if (num2 == 0) {
            return 1;
        }
        return num1 * calculate(num1, num2 - 1, oper);
    }
}
//console.log(calculate(4, 3, "exp"));

let arr = [1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9];

for (let index = 1; index < arr.length - 1; index++) {
    if (arr[index] == (arr[index + 1] - 1) && arr[index] == (arr[index - 1] + 1)) {

        //console.log(arr[index - 1] + " " + arr[index] + " " + arr[index + 1]);

    }

}

let letterReverse = (input) => {
    let arr = input.split(" ");
    let retString = "";
    for (let index = 0; index < arr.length; index++) {
        let tempArr = arr[index].split("")
        arr[index] = tempArr.reverse();
        retString += arr[index].join("") + " ";
    }
    return retString;
}
//console.log(letterReverse("Luke I am your father"));

let calculateCube = (num) => {
    return num * num * num;
}

//console.log(calculateCube(5));

let isAVowel = (let) => {
    if (let == "a" || let == "e" || let == "i" || let == "o" || let == "u") {
        return true;
    }
}
console.log(isAVowel("a"));


let getTwoLengths = (str1, str2) => {
    return arr = [str1.length, str2.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

let getMultipleLengths = (arr) => {
    let arr2 = [];
    for (let index = 0; index < arr.length; index++) {
        arr2.push(arr[index].length);

    }

    return arr2;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


console.log(Math.max(6, 9, 1));


let printLongestWord = (arr) => {
    let longest = "";
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].length > longest.length) {
            longest = arr[index];
        }

    }
    return longest;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));


let transmogrify = (num1, num2, exponent) => {

    return calculate(calculate(num1, num2, "mul"), exponent, "exp");
}
//console.log(transmogrify(5, 3, 2));


let fibonacci = (num) => {
for (let index = 0; index < num; index++) {
    
    
}
    
}