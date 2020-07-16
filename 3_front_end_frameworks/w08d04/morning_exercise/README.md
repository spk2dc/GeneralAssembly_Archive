![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Big O Notation

![](https://i.imgur.com/AHLnEHd.png)
image from: https://www.bigocheatsheet.com

## Overview
This lesson covers the basics of Big O notation.

## Learning Objectives
By the end of this lesson, you'll be able to:
- Explain how Big O notation is used to describe algorithms.
- Define constant, linear, quadratic and logarithmic Big O runtimes.
- Analyze algorithms to determine their Big O runtime.

<br />
By now you must know that any coding problem can have multiple solutions. There's never one "right" way to do things with code. However, that doesn't mean that all the possible ways to solve a problem are equally valid!

One of the things computer scientists are trained to do is to find ways to make things faster, smaller, cheaper and more precise. One way to approach such problems is to consider the worst case scenario. Big O Notation is a way to denote the worst case scenario.

It may not be obvious when dealing with small amounts of data, as we do in this class, but every line in your code takes some amount of time to run on your computer. If your program has to run millions of lines of code, it may take a non-trivial amount of time to complete.

Running millions of lines of code doesn't mean your code is millions of lines long. Take this example:

```javascript
let bigNumber = 0;
for (let i = 0; i < 1000000000; i++) {
    bigNumber += i;
}
console.log(bigNumber);
```

In this program, the third line will run one billion times! This code may take several seconds to run, depending on how fast your computer is.

Similarly, every time you define a new variable, or add to an array or object, you're using a finite resource on your computer -- its memory, or RAM (random-access memory). If you try to create an array with one billion elements, you may find that your program errors out because it runs out of memory:

```javascript
let bigArray = [];
for (let i = 0; i < 1000000000; i++) {
    bigArray.push(i);
}
console.log(bigArray.length);
```

It's often useful to generally describe how long a program will run, or how much space it will take up in computer memory. We use Big-O to describe these metrics.

Big O of Algorithms is measured by:
- **Time complexity** - the amount of time it takes to execute. It is measured in the number of steps an algorithm takes rather than measures of time like seconds or minutes.
- **Space complexity** - the amount of memory (RAM) required an algorithm needs to run.

Each complexity can be described with notation like O(n): Where n represents the number of elements.

Additionally, Big O can be represented visually with the execution time/memory on the y-axis and input size on the x-axis.

![](https://i.imgur.com/SmB6APr.png)

As the input size increases the execution time can change, based on the algorithm being used.

For our introduction, we'll only consider time complexity, however on myGA and in your studies you should learn and consider space complexity as well.

We will look at 5 classes of complexity.


### Constant `O(1)`

```js
const getFirstSongFromPlaylist = (array) => {
  console.log(array[0])
}
```

This algorithm has a Big O complexity of `constant`. No matter the size of the array 1 or 1 million, this always takes the same amount of time and memory to execute.

This type of complexity is considered highly efficient.

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/big-o/english/8-Input-Size-Run-Time-Graph.png)


### Linear `O(n)`

```js
const printSongs = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}
```

This algorithm has a Big O complexity of `linear`. For each added song to the array, the amount of time it takes to complete this is increased by 1 step.

If the array (or playlist) has 1 item, it will take 1 step to complete. If the array has a million items it will take a million steps to complete.

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/big-o/english/6-Input-Size-Run-Time-Graph.png)

### Quadratic Complexity `O(n^2)`

```js
  const PrintSongsWithinAlbums = () => {
    for (let i = 0; i < array.length; i++) {
      let albumName = array[i];
      for (let j = 0; j < array.length; j++) {
        console.log(`Album: ${albumName} Song: ${array[j]}`)
      }
    }
  }
```

This algorithm has a Big O complexity of `quadratic`. For each added item to the array, the amount of time it takes to complete this is increased by n to the n power!

Imagine you wanted to print every song by an artist. The above function would loop through each album and then within each album, loop through each song. For each album the complexity doesn't increase just by 1 step, but by each album times each song on the album.

As we think of the worst case scenario if every album has ten songs, if we have 10 albums, we go through the steps 10 times for the albums and then times for each song so for a collection of 10 albums we go through the algorithm 100 times.

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/big-o/english/10-Input-Size-Run-Time-Graph.png)

### Logarithmic Complexity `O(log(n))`

Imagine we are calling out to our favorite voice assistant to play a song for us. There are millions of songs out there. Let's say we're looking for `I Can't Get No Satisfaction`

How is our assistant finding our song?

Is it going randomly through every single song in the database?

Is it looking by artist then by song (again without any organization)?

In either scenario, you'd have to consider the worst-case scenario which is that the song you ask for is always the absolute last song found.

What if the songs were organized alphabetically?

Then we could perform a binary search.

We would start at the middle and then check if there is a match. If it matches we're done!

But with Big O we're always thinking about the worst case scenario and that our song will be the last song found.

So we start in the middle, let's say that this middle is songs that start with the letter `M`, if our song starts with the letter `I` we can eliminate all the songs that start with M or further in the alphabet. Now we've cut down the number of items we must search by half.

Let's set our next midpoint to be the middle of the remaining songs, and we get songs that start with the letter `F`. Since our song starts with the letter `I`, we can stop searching through songs starting with A - F, and have again, cut our search down by half.

We would keep repeating, removing half of the songs we are looking through until we found our song. This more complicated process is more efficient than looking through every single song and can be represented

```js
function binarySearch(arr, item, first = 0, last = null) {
    if (!last) last = arr.length
    let midpoint = Math.floor((last - first) / 2) + first
    if (arr[midpoint] === item) return midpoint
    if (arr[midpoint] > item) return binarySearch(arr, item, first, midpoint)
    if (arr[midpoint] < item) return binarySearch(arr, item, midpoint, last)
}
```

In this way, if we have 16 songs, the number of steps would be 4 Log(2) of 16 = 4.

If we have about 1.126 million songs, the number of steps would be just 50!

This type of complexity is considered highly efficient.

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/big-o/english/9-Input-Size-Run-Time-Graph.png)


### Example - findMax()

Imagine that we wanted to write a function in Javascript that will find the maximum value in an array of numbers. You might come up with two possible ways to approach this problem:

1. Loop through every value in the array. For each current value, compare it against every *other* value in the array. If no other value is larger, this current value is the largest, so we can return it.

1. Create a variable to store the largest value in the array. Initialize it to the first value. Loop through every other value. For each current value, if the current value is greater than the stored largest value, update the largest value with the current value. After the loop is done, return the stored largest value.

You may find one of these approaches conceptually simpler, but that's pretty subjective. Let's take a look at something more objective -- Big-O!

The first approach could be implemented like this:

<details><summary>findMax1</summary>

```javascript
function findMax1(arr) {
    // Loop through each value in the array. For each value "currentVal":
    for (let i = 0; i < arr.length; i++) {
        let currentVal = arr[i];
        // Loop through every other value. If any value is greater than
        // currentVal, then we know currentVal is not the max.
        let currentIsMax = true;
        for (let j = 0; j < arr.length; j++) {
            let otherVal = arr[j];
            if (otherVal > currentVal) {
                currentIsMax = false;
            }
        }
        // If none of the other values were greater than currentVal,
        // then we can just return currentVal.
        if (currentIsMax) {
            return currentVal;
        }
    }
}
```

</details>

and the second like this:

<details><summary>findMax2</summary>

```javascript
function findMax2(arr) {
    // Initialize a max value variable to the first item in arr.
    let maxVal = arr[0];
    // Loop through the other values in the array. For each value "currentVal":
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        // If currentVal is greater than maxVal, then set maxVal to currentVal
        if (currentVal > maxVal) {
            maxVal = currentVal;
        }
    }
    // Return the max value we kept track of
    return maxVal;
}
```

</details>

Consider how many lines of code will run in either example. To be more concrete, let's imagine we're running each function on an array with 100 numbers.

In `findMax1`, the first loop goes through every element in the array, so every line within it, starting with `let currentVal = arr[i];`, runs 100 times. There's a nested loop in there, which also loops over every element. Since the nested loop runs 100 times, and every line within the nested loop runs 100 times *every time the loop runs*, the lines within the nested loop run 100 * 100 times, or 10,000 times.

All told, we're running about 4 * 10,000 (inner loop) + 5 * 100 (outer loop) lines, or 40,500 lines.

In `findMax2`, we have one loop that runs through the elements in the array. Here we're running about 4 * 100 (inside the loop) + 2 (outside the loop), or 402 lines of code.

As you can see, we run much less code in `findMax2`! For an even larger array, say one with one million elements, `findMax1` will run about 4 trillion lines, while `findMax2` will run about 4 million. In this case, `findMax1` is prohibitively slow.

In the general case, we can give a pretty accurate runtime of these functions in terms of lines of code. We can say that `findMax1` will generally run `4 * n^2 + 5 * n` lines of code, where `n` is the size of our input array, and that `findMax2` will run `4 * n + 2` lines of code.

### Analyzing runtime with Big-O

Actually, we don't really need this level of granularity. What's really important is that `findMax1` is slower than `findMax2` by a factor of `n` (in this case, because of the nested loop). That's what makes it so slow with really large inputs.

We might add or remove a line of code in one of the loops, but that's not going to change the fact that `findMax1` is slower by a whole factor of `n`. So for the purposes of analysis we go ahead and ignore constant factors like 4 and 5. We actually ignore the `+ 5 * n` part of `findMax1`'s runtime entirely, because it's so overshadowed by the `n^2` part for sufficiently large `n`. For example, if `n` was one thousand, `n^2` would be 1,000,000 and `n` would be 1000, and 1000 extra lines is a drop in the bucket if you're running 1,000,000 lines anyways!

Similarly, we ignore the `+ 2` part of `findMax2`'s runtime since it's not significant relative to `n` as `n` grows very large. Consider again 2 extra lines vs. the 1000s of lines we'd run if `n` was one thousand.

What we're left with when we drop these constant factors are runtimes of `n^2` for `findMax1` and `n` for `findMax2`. To reflect the fact that we're approximating using the process described above, we use "Big-O notation" and say that the runtimes are `O(n^2)` and `O(n)`.

(For a formal mathematical definition of the Big-O function `O()`, you can check out Wikipedia: https://en.wikipedia.org/wiki/Big_O_notation#Formal_definition)

### Considering the worst-case scenario

"But wait," you may be thinking, "sometimes we return early from `findMax1`! It doesn't always take `n^2` instructions to finish!" You'd be right to think this, but another characteristic of Big-O is that it considers the *worst-case* runtime of a program.

A simpler example would be a function that checks if a certain value exists in an array:

```javascript
function isValueInArray(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}
```

Depending on the input you give the function, you may run the code inside this function's loop just one time (if the item you're looking for is the first item in the array), or many times (if you check every item in the array without finding `value`).

Even so, we say this function is `O(n)`, since its code runs once for every item in the input *in the worst case*.

### Closing thoughts

These are fairly abstract examples, but even so, you can test that `findMax1` really is too slow when you run it with large arrays. If you try running it on an array with ten million numbers:

```javascript
let myArray = [];
for (let i = 0; i < 10000000; i++) {
    myArray.push(i);
}
console.log(findMax1(myArray));
```

you will find that your program simply never completes. You may also observe your computer heating up as it frantically runs through billions of lines of code.

On the other hand, if you try to call `findMax2` with the same array:

```javascript
console.log(findMax2(myArray));
```

it should finish in less than a second. So you can see that under some circumstances `findMax1` is simply not a viable function to use, while `findMax2` works just fine. This is reflected by their Big-O runtimes; a `O(n)` algorithm is going to be much faster than a `O(n^2)` algorithm.

## Summary
We can look at this chart in myGA to look at how efficiency changes as input increases across the different types of classes of complexity.

![](https://i.imgur.com/CExCK8P.png)

Again, we can see that in most cases, when we are looking at 600 or less items, our computers can work through them quickly and our primary concern in this course should not be efficiency or optimization.

Early optimization is problematic because it can be overwhelming to think about as you start to solve a problem or build an app and can prevent you from building a prototype in a reasonable amount of time.

In your career as a programmer (especially as a junior developer), you probably won't encounter very large datasets or strict time constraints on a daily basis. But you might sometimes, and knowing how to formally analyze your code's limitations and complexity is an important part of becoming a versatile engineer capable of handling novel problems and situations.

<br />
### Exercise: [Analyzing Algorithms](/exercises/Exercises.md)

## Additional Resources
- [The Big O Cheat Sheet](http://bigocheatsheet.com/) is the authority on Big O complexities.
- [myGA module: Big O Notation](https://my.generalassemb.ly/activities/511)
