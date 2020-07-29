function insertionSort(items) {
    // Loop through each element
    for (let i = 1; i < items.length; i++) {
        // store the current item value so it can be placed correctly
        // in the sorted portion of the array
        const value = items[i];
        // Loop backward through the sorted portion of the array
        // and scoot everything over until you find the right place to
        // insert the value you're working with
        let j = i - 1;
        for (; j >= 0; j--) {
            // Copy each item to the next slot over, as long as the value is smaller
            // than the item in the sorted array we're looking at (items[j] > value)
            if (value < items[j]) {
                items[j + 1] = items[j];
            } else {
                break;
            }
        }
        // We can now insert the item in its sorted location
        items[j + 1] = value;
    }
    // Remember to return the list!
    return items;
}

const arr = [12, 6, 3, 7, 13, 8];
// insert 6: [6, 12, 3, 7, 13, 8]
// insert 3: [3, 6, 12, 7, 13, 8]
// insert 7: [3, 6, 7, 12, 13, 8]
// insert 13: [3, 6, 7, 12, 13, 8] (did nothing)
// insert 8: [3, 6, 7, 8, 12, 13]
console.log(insertionSort(arr));

const otherArr = [-3, -1, 5, 100];
console.log(insertionSort(otherArr));

// Big-O of insertion sort is O(n^2)
let bigArr = [];
for (let i = 0; i < 10000000; i++) {
    // bigArr.push(Math.floor(Math.random() * 100000));
    // bigArr.push(i);
    bigArr.push(i + Math.floor(Math.random() * 10));
}
console.log(bigArr.slice(0, 20));
console.log(insertionSort(bigArr).slice(0, 20));
