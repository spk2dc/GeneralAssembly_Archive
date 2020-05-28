const arr = [];
// console.log(arr);

const fave_foods = ['pizza', 'hamburger', 'mac & cheese'];
// console.log(fave_foods[2]);

const satchel  = [
    'chair', 'table', 'candle',
    'map', 'magnifying glass', 'rupees',
    'Pepto Bismol', 'boomerang', 'sword',
];

// Imagining that the satchel represents an inventory with
// 3 rows of 3 items each, get the 3rd item on the 2nd row.
// let x = 2;
// let y = 1;
// let rowWidth = 3;
// console.log(satchel[y * rowWidth + x]);
// console.log(satchel.length);

// Replace the third item with a new item.
// console.log(satchel);
// satchel[2] = 'glowing orb';
// console.log(satchel);

// Get the middle item.
// console.log(satchel[Math.round(satchel.length / 2)]);

// Process every other item in the array by incrementing our index by 2.
// for (let i = 0; i < satchel.length; i += 2) {
//     console.log('a nimble rogue is trying to steal my ' + satchel[i] + '!');
// }

// Process every other item in the array by manually checking the index.
// for (let i = 0; i < satchel.length; i++) {
//     if (i % 2 === 0) {
//         console.log('a fairy has enchanted my ' + satchel[i]);
//     }
// }

// Process every item with an even index or with index 3, using a compound
// conditional.
// for (let i = 0; i < satchel.length; i++) {
//     if ((i % 2 === 0) || (i === 3)) {
//         console.log('an elf has set fire to my ' + satchel[i]);
//     }
// }

const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

// Modify the first element of the array in-place.
// squares[0] *= 10;
// // Same as saying:
// // squares[0] = squares[0] * 10;

const drSeussBooks = [
    'Cat in the Hat', 'Green Eggs and Ham', 'Grinch',
    'Thing One', 'Thing Two', 'Cindy Loo Who', 'JoJo McDodd',
];

// Get the first element of the array.
// console.log(drSeussBooks[0]);
// Get the third element in the array, using a variable to store the index.
// let third = 2;
// console.log(drSeussBooks[third]);
// Get the last element in the array.
// console.log(drSeussBooks[drSeussBooks.length - 1]);

// Modify the fifth element in the array.
// drSeussBooks[4] = null;
// console.log(drSeussBooks);

// Process every element with an odd index by incrementing the index by 2 and
// starting at 1.
// for (let i = 1; i < drSeussBooks.length; i += 2) {
//     console.log(drSeussBooks[i]);
//     console.log(i);
// }

// Process every element with an odd index by manually checking the index.
// for (let i = 0; i < drSeussBooks.length; i++) {
//     if (i % 2 != 0) {
//         console.log(drSeussBooks[i]);
//     }
// }

const pairs = [['Harold', 'Kumar'], ['Laurel', 'Hardy']];
// console.log(pairs.length);
// Get the first element of the second array in "pairs".
// console.log(pairs[1][0]);

// let myArr = [1, 2, 3];
// // Makes a shallow copy of "myArr".
// let arrCopy1 = myArr;
// // Makes a deep copy of "myArr".
// let arrCopy2 = myArr.slice(0);
// myArr.push(4);
// console.log(myArr);
// // This has been modified!
// console.log(arrCopy1);
// // This has *not* been modified!
// console.log(arrCopy2);