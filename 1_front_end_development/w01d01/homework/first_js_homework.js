/*
SECTION 1

1. DRY = don't repeat yourself. Important for efficiency and simplicity purposes.
We have learned to use loops to minimize repetition of code.

2. var is globally/functionally scoped and can be redeclared. let is block scoped
and cannot be redeclared, only reassigned. const is the same as let but cannot be 
changed once declared so it always remains the same.

*/

// SECTION 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

let bool = false;

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
console.log(a < b < c);
console.log(a == a || d);
console.log(e != 'Kevin');
console.log(48 == '48');
console.log(f != e);

//let and var work the same, const throws an error because of reassignment
let g = 0;
//10 = g; this produces an invalid left hand assignment error
console.log(g);
g = b + c;
console.log(g);

/* SECTION 3
1. Yes it's an infinite loop because there is no way to break out of the
true condition in the while statement and make it turn false to stop.

2. No it's not an infinite loop because the loop condition variable
turns from true to false after the first run. 
*/

let letters = "A";
let i = 0;

//loop that runs while i is less than 20
while (i < 20) {
    //adds A to letters string everytime loop runs
    letters += "A";
    //increases i
	i++;
}
//will print 20 'A's
console.log(letters);
//my assumption was wrong, it's 21 A's because you start with 1

/* SECTION 4
1. for loop is the same as a while loop, it just provides
structure so you can see the count variable and loop condition
all in one line at the top

2. The first part of the control panel is: initialize count variable
The second part of the control panel is: loop condition
The third part of the control panel is: change count variable

*/

for (let i = 0; i < 1000; i++){
    console.log(i);
}
for (let i = 999; i >= 0; i--){
    console.log(i);
}

for (let i = 0; i <= 10; i++){
    console.log(`The value of i is: ${i} of 10`);
}

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let i = 0; i < StarWars.length; i++){
    console.log(`${i} is ${StarWars[i]}`);
}