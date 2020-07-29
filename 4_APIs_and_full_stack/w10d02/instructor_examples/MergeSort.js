// [32, 894, 81, 9, 920, 10, 2]                <- first call to mergeSort
// [32, 894, 81, 9],         [920, 10, 2]      <- first call splits the array, and calls merge sort recursively
// [32, 894],    [81, 9],    [920, 10],   [2]  <- second round of calls splits again
// [32], [894],  [81], [9],  [920], [10],  [2] <- third round of calls splits again. here's where we stop recursing,
//                                                because the fourth round of calls immediately return (base case)
// [32, 894],    [9, 81],    [10, 920],    [2] <- back in the second round of calls
// [9, 32, 81, 894],         [2, 10, 920]      <- first call
// [2, 9, 10, 32, 81, 894, 920]

function mergeSort(arr) {
    // Recursive base case: arr just has one value
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array in half
    const mid = Math.ceil(arr.length / 2);
    const firstHalf = [];
    const secondHalf = [];
    for (let i = 0; i < mid; i++) {
        firstHalf.push(arr[i]);
    }
    for (let i = mid; i < arr.length; i++) {
        secondHalf.push(arr[i]);
    }

    // Sort the two halves
    const sortedFirstHalf = mergeSort(firstHalf);
    const sortedSecondHalf = mergeSort(secondHalf);

    // Merge the two sorted halves
    const newArr = [];
    let i = 0;
    let j = 0;
    // Keep adding to a new, sorted array as long as we have values to add
    while (i < sortedFirstHalf.length || j < sortedSecondHalf.length) {
        // If we still have values in the first half of the array,
        // AND (we have no more values from the second half of the array,
        //      OR the next value in the first half is smaller than that in the second),
        // then add the value from the first half
        if (i < sortedFirstHalf.length &&
                (j >= sortedSecondHalf.length ||
                 sortedFirstHalf[i] < sortedSecondHalf[j])) {
            newArr.push(sortedFirstHalf[i]);
            i++;
        // Otherwise, add the value from the second half
        } else {
            newArr.push(sortedSecondHalf[j]);
            j++;
        }
    }

    // Return a new array
    return newArr;
}

let myarr = [32, 894, 81, 9, 920, 10, 2];
myarr = mergeSort(myarr);
console.log(myarr);

let bigArr = [];
for (let i = 0; i < 1000000; i++) {
    bigArr.push(Math.floor(Math.random() * 100000000));
}
bigArr = mergeSort(bigArr);
console.log(bigArr.slice(0, 10));

// Each split and merge is O(n), and we make O(log(n)) rounds of recursive
// calls, so the total runtime is:
// O(n * log(n))
// pretty good!
