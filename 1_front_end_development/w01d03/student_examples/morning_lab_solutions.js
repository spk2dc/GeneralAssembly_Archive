let firstVariable = "Hello World";
firstVariable = 6;
secondVariable = firstVariable;
secondVariable = "test";
console.log(secondVariable);

let name = "Senthil";
console.log("My name is: " + name);


const a = 6;
const b = 100;
const c = -5;
const d = 3000;
const e = 'Jelly Bean';
console.log(a < b);
console.log(c < d);
console.log('Peanut' == 'Peanut');
console.log(a < b || c);
console.log(a == a || d);
console.log(e == 'Jelly Bean');
console.log(48 == '48');
console.log('e' != 'Eh');

let animal = "cow"
if (animal == "cow") {
    console.log("mooo");
} else {
    console.log("not cow");
}

for (let index = 0; index < 100; index++) {
    if (index % 5 == 0) {
        console.log(index + " is a 5");
    } else if (index % 3 == 0) {
        console.log(index + " is a 3");
    }
}


let favMovies = [
    'Terminator',
    'Lo',
    'The Lord of the Rings',
    'Up',
    'The Fifth Element',
    'The Shining',
    'Inception',
    'Irishmen',
    'Dazed and Confused',
    'The Hangover',
    'Parasite',
    'Rear Window',
    'Call Me by Your Name',
    'Apollo 13',
];

console.log(favMovies.shift());