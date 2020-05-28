/*
Create a loop that logs the numbers from 0-99 (ascending)
Create a loop that logs the numbers from 99-0 (descending)
Create a loop that logs the EVEN numbers from 0-98 (ascending)
Create a loop that logs the EVEN numbers from 98-0 (descending)
Create a loop that logs the ODD numbers from 0-99 (ascending)
*/

for (let index = 0; index < 100; index++) {
    console.log(index);
}

for (let index = 99; index >= 0; index--) {
    console.log(index);
}

for (let index = 0; index < 100; index++) {
    if (index % 2 == 0) {
        console.log(index);
    }
}

console.log("Create a loop that logs the EVEN numbers from 98-0 (descending)");
for (let index = 98; index >= 0; index--) {
    if (index % 2 == 0) {
        console.log(index);
    }
}

console.log("Create a loop that logs the ODD numbers from 0-99 (ascending)");
for (let index = 0; index < 100; index++) {
    if (index % 2 == 1) {
        console.log(index);
    } else if (index == 0) {
        console.log(index);
    }
}