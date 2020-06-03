let func1 = (num) => {
    num();
}
let func2 = () => {
    console.log('hi');
}
func1(func2);


/*
const foo = (num, input2) => {
    num(input2);
}

const bar = (num) => {
    console.log(num);
}

foo(bar, 'hi');
*/


const foo = (num, input2) => {
    num(input2, 'hello2');
}

const bar = (num, input2) => {
    console.log(input2);
}

foo(bar, 'hi');
const baz = (num) => {
    console.log(num.toUpperCase());
}
foo(baz, 'hello1')


const electricMixer = (attachment) => {
    console.log("This mixer is now: " + attachment());
}
electricMixer(() => {
    return "spiralizing";
});
const spiralizer = () => {
    return "spiralizing";
}

electricMixer(spiralizer);
const slicerDicer = () => {
    return "slicin' and dicin'";
}

electricMixer(spiralizer);
electricMixer(slicerDicer);

const whip = () => {
    return 'whipping';
}
electricMixer(whip);


//setInterval and setTimeout

// setTimeout(() => {
//     console.log('hi');
// }, 2000);
// setInterval(() => {
//     console.log(num);
// }, 2000);

// let num = 0;
// let x = setInterval(function () {
//     console.log(num);
//     num = num + 1;
//     if (num > 2) {
//         console.log(x);
//         clearInterval(x);
//     }
// }, 1000);


//Rep Master
let wordReverse = (num) => {
    return num.split(" ").reverse().join(" ");
}
let toUpperCase = (num) => {
    return num.toUpperCase();
}
let repMaster = (str, func) => {
    let retStr = func(str) + ' proves that I am the rep MASTER!';
    console.log(retStr);
    return retStr;
}
console.log(wordReverse("Never give your heart to a blockhead"));
repMaster("Never give your heart to a blockhead", wordReverse);
repMaster("I finished this practice", toUpperCase);



//AFTERNOON LAB
const classArray = ['Javascript', 'HTML', 'CSS', 'Data Analysis', 'Marketing', 'Database Design', 'Visual Design'];

const numberArray = [31, 203, 30, 84, 5, 62, 770, 8, 99, 10, 0];
let findVal = numberArray.find((element) => {
    return element == 5;
});
console.log(findVal);