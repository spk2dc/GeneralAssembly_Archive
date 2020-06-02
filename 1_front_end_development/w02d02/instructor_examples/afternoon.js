let arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     console.log(num);
// }
// for (let num of arr) {
//     console.log(num);
// }

let cat = { name: 'Garfield', favoriteThings: ['Lasagna', 'Sleep', 'Pookie'] };
// for (let key in cat) {
//     console.log(key, cat[key]);
// }

// for (let favoriteThing of cat.favoriteThings) {
//     console.log(favoriteThing);
// }

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//     }
// }


// const foo = () => {
//     return {
//         someProperty: 'hi!',
//     }
// }

// console.log(foo().someProperty);
// console.log({ someProperty: 'hi!' }.someProperty);
// console.log('hi!');


// const foo = () => {
//     return ['apple', 'banana', 'orange'];
// }
// console.log(foo()[1]);
// console.log(['apple', 'banana', 'orange'][1]);
// console.log('banana');

// const foo = () => {
//     return {
//         someArray: ['fun', 'awesome', 'sweet'],
//     }
// }
// console.log(foo().someArray[2]);
// console.log({ someArray: ['fun', 'awesome', 'sweet'] }.someArray[2]);
// console.log(['fun', 'awesome', 'sweet'][2]);
// console.log('sweet');

// const foo = () => {
//     return {
//         someObject: {
//             someProperty: 'hello!',
//         }
//     }
// }
// console.log(foo().someObject.someProperty);

// const foo = () => {
//     return {
//         someMethod: () => {
//             return 'hello world';
//         }
//     }
// }
// console.log(foo().someMethod());

// const foo = () => {
//     return () => {
//         return 'oh hai!';
//     }
// }
// console.log(foo()());
// console.log((() => { return 'oh hai!'; })());
// console.log('oh hai!');

// const foo = {
//     someMethod: () => {
//         return {
//             someProperty: 'hello, world',
//         }
//     }
// };
// console.log(foo.someMethod().someProperty);

// const foo = {
//     someMethod: () => {
//         return {
//             someArray: ['peach', 'apple', 'pear'],
//         }
//     }
// }
// console.log(foo.someMethod().someArray[0]);

// const foo = {
//     someMethod: () => {
//         return {
//             someObject: {
//                 someProperty: 'hello world',
//             }
//         }
//     }
// }
// console.log(foo.someMethod().someObject.someProperty);

// const foo = {
//     someMethod: () => {
//         return {
//             someMethod: () => {
//                 return 'does this work?';
//             }
//         }
//     }
// }
// console.log(foo.someMethod().someMethod());

// const foo = {
//     someMethod: () => {
//         return () => {
//             return 'hello, world';
//         }
//     }
// }
// console.log(foo.someMethod()());

// const foo = [
//     1,
//     'apple',
//     () => {
//         return {
//             someProperty: 'hello world!',
//         }
//     }
// ];
// console.log(foo[2]().someProperty);

const foo = [
    2,
    'banana',
    () => {
        return () => {
            return 'yes!';
        }
    }
];
console.log(foo[2]()());
