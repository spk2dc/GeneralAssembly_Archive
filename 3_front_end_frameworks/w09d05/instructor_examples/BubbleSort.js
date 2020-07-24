function bubbleSort(array) {
    // Make some sort of loop that keeps happening if there were any swaps
    // that happened this turn
    let swapHappened = true;
    while (swapHappened) {
        // reset swapHappened to false each time so we can detect if a swap
        // happened in this specific iteration.
        swapHappened = false;
        // Make another loop (inside the first one) to go through one 
        // round of swapping from the start of the list to the end
        for (let i = 0; i < array.length - 1; i++) {
            // Inside inner loop:
            // compare each pair of elements near each other
            // swap them if the bigger one was at a lower index.
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                // Make sure to keep track of whether a swap happened!
                swapHappened = true;
            }
        }
    }
    // After both loops have exited, remember to return the array
    return array;
}

const arr = [12, 6, 3, 7, 13, 8];
// first pass: [6, 3, 7, 12, 8, 13]
// second pass: [3, 6, 7, 8, 12, 13]
// third pass: [3, 6, 7, 8, 12, 13] (did nothing)
console.log(bubbleSort(arr));

const otherArr = [-3, -1, 5, 100];
console.log(bubbleSort(otherArr));

const thirdArr = [5, 4, 3, 2, 1];
// first pass: [4, 3, 2, 1, 5]
// second pass: [3, 2, 1, 4, 5]
// third pass: [2, 1, 3, 4, 5]
// fourth pass: [1, 2, 3, 4, 5]
// fifth pass:  [1, 2, 3, 4, 5] (did nothing)
console.log(bubbleSort(otherArr));

// Big-O of bubble sort is O(n^2)
let bigArr = [];
for (let i = 0; i < 10000000; i++) {
    // bigArr.push(Math.floor(Math.random() * 100000));
    // bigArr.push(i);
    bigArr.push(i + Math.floor(Math.random() * 10));
}
console.log(bigArr.slice(0, 20));
console.log(bubbleSort(bigArr).slice(0, 20));
