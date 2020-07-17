let myArr = [42, 13, 78, 1, 11, 4, 7, 65];
console.log(myArr);
// Want to end up with [1, 4, 7, 11, 13, 42, 65, 78]
// Can compare each number with each other number
// Can create a new array
// First we add 1, which is the smallest number
// Then we add 4, which is the next smallest number after 1
//   or, the smallest number in the array if we remove 1
// We keep repeating this process of finding the smallest number and removing it
// This is know as "selection sort":
// https://en.wikipedia.org/wiki/Selection_sort

// Returns a sorted array
const sort = (arr) => {
    // Create a new array to return
    let newArr = [];
    // While we still have numbers in our input array:
    while (arr.length > 0) {
        // Find the smallest number in the input array
        let minIndex = findMin(arr);
        // Add it to the new array
        newArr.push(arr[minIndex]);
        // Remove it from the input array
        arr.splice(minIndex, 1);
    }
    // Return the new array
    return newArr;
}

// Returns the index of the smallest number in an array
// findMin([42, 13, 78, 1, 11, 4, 7, 65]) should return 3
const findMin = (arr) => {
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        if (currentVal < arr[minIndex]) {
            minIndex = i;
        }
    }
    return minIndex;
}

// console.log(findMin(myArr));
let sortedArr = sort(myArr);
console.log(sortedArr);

// findMin is O(n), we call it n times,
// so sort is O(n^2). Not great!

let bigArr = [];
for (let i = 0; i < 1000000; i++) {
    bigArr.push(Math.floor(Math.random() * 1000000));
}
sortedArr = sort(bigArr);
console.log(sortedArr.slice(0, 10));
