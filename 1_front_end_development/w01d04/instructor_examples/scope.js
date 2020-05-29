const addNumbers = (num1, num2) => {
    let sum = num1 + num2;
    return sum;
}

const addTen = (num) => {
    let sum = addNumbers(num, ten);
    return sum;
}

let ten = 10;

let twoPlusTen = addTen(2);
console.log(twoPlusTen);


for (let i=0; i < 10; i++) {
    let loopCount = i + 1;
	console.log('Inside the block: ', loopCount);
}
// console.log('Outside the block: ', loopCount);


const age = 21;
let message = '';
if (age < 21) {
	message = 'You cannot buy the beer';
} else {
	message = 'You can buy the beer';
}
console.log(message);
