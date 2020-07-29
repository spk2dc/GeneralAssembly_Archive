// [32, 894, 81, 9, 920, 10, 2]
// [9, 10, 2] 32 [894, 81, 920] <- Split the array around a pivot
// [2] 9 [10]    [81] 894 [920] <- Recursively sort the two parts of the array
// [2, 9, 10] 32 [81, 894, 920] <- After returning from the recursive calls, concatenate the arrays
// [2, 9, 10, 32, 81, 894, 920]
// Assuming we pick good pivots, we make O(log(n)) rounds of recursive calls,
// and each round is O(n), so we're at O(n * log(n)) overall.

// [1, 2, 3, 4, 5]
// [] 1 [2, 3, 4, 5]
// []   [] 2 [3, 4, 5]
//           [] 3 [4, 5]
//                [] 4 [5]
//           [] 3 [4, 5]
//      [] 2 [3, 4, 5]
// [] 1 [2, 3, 4, 5]
// [1, 2, 3, 4, 5]
// For an already sorted, or nearly-sorted array, this is O(n^2), not good!
// So, we pick a random pivot below.

function quickSort(arr) {
    // Recursive base case: arr just has one value
    if (arr.length <= 1) {
        return arr;
    }

    // Pick a pivot
    // const pivot = arr[0];
    // We pick the pivot randomly to avoid slowness with nearly-sorted arrays
    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex];
    // Swap the pivot with the first value
    arr[pivotIndex] = arr[0];
    arr[0] = pivot;

    // Split arr into two arrays, around the pivot
    const firstHalf = [];
    const secondHalf = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            firstHalf.push(arr[i]);
        } else {
            secondHalf.push(arr[i]);
        }
    }

    // Sort the two arrays recursively
    const sortedFirstHalf = quickSort(firstHalf);
    const sortedSecondHalf = quickSort(secondHalf);

    // Concatenate the two arrays and the pivot
    const newArr = [];
    for (let i = 0; i < sortedFirstHalf.length; i++) {
        newArr.push(sortedFirstHalf[i]);
    }
    newArr.push(pivot);
    for (let i = 0; i < sortedSecondHalf.length; i++) {
        newArr.push(sortedSecondHalf[i]);
    }

    // Return the new concatenated array
    return newArr;
}

let myarr = [32, 894, 81, 9, 920, 10, 2];
myarr = quickSort(myarr);
console.log(myarr);

let bigArr = [];
for (let i = 0; i < 1000000; i++) {
    // bigArr.push(Math.floor(Math.random() * 100000000));
    bigArr.push(i);
}
bigArr = quickSort(bigArr);
console.log(bigArr.slice(0, 10));
