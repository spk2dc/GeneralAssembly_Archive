
// Return the index of "value" in "arr". If it's not in there, return -1.
function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

// Big-O of linear search is O(n)

// If we know the array is sorted we can do better! Consider looking for a name
// in a phone book. You wouldn't start at the first page and go all the way
// through linearly. You might start in the middle, see if that page comes
// before or after your target name, and keep searching in one half of the book
// or the other based on that. We can take a similar approach here.

// Looking for 33 in a sorted array:
// [2, 9, 10, 32, 81, 894, 920, 1000] (starting at 0, ending at 8, midpoint 4)
//                 ^ ?
// 81 is greater than 33, so keep searching just the first half:
// [2, 9, 10, 32] (starting at 0 and ending at 4, midpoint 2)
//         ^ ?
// Continuing this process, now 10 is less than 33, so search the second half:
// [32]  (starting at 3, ending at 4, midpoint is 3)
//   ^ ?
// Continuing the process we'll end up with no values if we didn't find 33.
// []  (starting at 4, ending at 4, item not found)

function binarySearch(arr, value) {
    // Initialize some indices that serve as bounds within the array where
    // "value" might be. E.g. "value" is somewhere between "start" and "end".
    let start = 0;
    let end = arr.length;
    // While start is less than end, we still have some values to check:
    while (start < end) {
        // Calculate a middle index between "start" and "end"
        let mid = Math.floor(start + (end - start) / 2);
        // Compare the element at that middle index against our input value
        // If the element is equal to the input value:
        if (arr[mid] === value) {
            // Return the middle index
            return mid;
        // If the element is less than the input value:
        } else if (arr[mid] < value) {
            // We only want to look at the second half of the remaining array
            // So, set start to be one index past middle
            start = mid + 1;
        // Else (the element is greater than the input value):
        } else {
            // We only want to look at the *first* half of the remaining array
            // So, set *end* to be middle (one past the last valid index)
            end = mid;
        }
    }
    // If we have no more values to look at, and haven't returned an index yet,
    // return -1 since "value" is not in "arr"
    return -1;
}

// We can also implement binary search recursively:
function recursiveBinarySearch(arr, value, start=0, end=arr.length) {
    if (end <= start) {
        return -1;
    }
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === value) {
        return mid;
    } else if (arr[mid] < value) {
        return recursiveBinarySearch(arr, value, mid + 1, end);
    } else {
        return recursiveBinarySearch(arr, value, start, mid);
    }
}

// Big-O of binary search O(log2(n))

// const myarr = [2, 9, 10, 32, 81, 894, 920, 1000];
// console.log(binarySearch(myarr, 33));

const bigArr = [0];
for (let i = 0; i < 10000000; i++) {
    bigArr.push(bigArr[i] + 1 + Math.floor(Math.random() * 3));
}
console.log(bigArr.slice(0, 20));

for (let i = 0; i < 500; i++) {
    const value = Math.floor(Math.random() * 20000000);
    // const foundIndex = linearSearch(bigArr, value);
    const foundIndex = binarySearch(bigArr, value);
    console.log(`${value}: ${foundIndex} ${bigArr[foundIndex]}`);
}
