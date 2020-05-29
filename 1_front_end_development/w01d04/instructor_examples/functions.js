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
// function that console.logs 'Boo!'

// const printBoo = () => {
//     console.log('======');
// 	console.log('Boo!');
// 	console.log('======');
// }

// printBoo();

// Write a function printSum that will console.log the result of 10 + 10

// const printSum = () => {
//     let s = 10;
//     let y = 10;
//     console.log(s + y);
// }

// function printSum() {
//     let x = 10;
//     let y = 10;
//     console.log(x + y);
//  }

// printSum();



// Write a function printTriangle that will print these pound signs to the console (there are 5 console.logs inside the function)

// const printTriangle = () => {
//     console.log("#");
//     console.log("##");
//     console.log("###");
//     console.log("####");
//     console.log("#####");
// }

// printTriangle();

// Make it so that printTriangle will print the pound signs using a for loop (there is a for loop and only 1 console.log inside the function)

// const printTriangle = () => {
//     let pound = "";

//     for( let i = 0; i < 5; i++) {
//         pound += "#";
//         console.log(pound);
//     }
// }

// printTriangle();

// Make it so that when you can invoke the function with the number of pound signs to print (not just hardcoded to print 5)

// const printTriangle = (value) => {
//     let pound = "";

//     for(let i = 0; i < value; i++) {
//         pound += "#";
//         console.log(pound);
//     }
// }

// printTriangle(5);

// Write a function called minusOne that takes a parameter num. Assuming the argument is a number, print the argument -1

// const minusOne = (num) => {
//     console.log(num -1);
// } 

// minusOne(100);

// Write a function makeSentence that takes three parameters and concatenates them into a fully formed sentence

// const makeSentence = (p1, p2, p3) => {
//     console.log( p1 + p2 + p3 );
// }

// makeSentence('I', ' am ', 'happy');

