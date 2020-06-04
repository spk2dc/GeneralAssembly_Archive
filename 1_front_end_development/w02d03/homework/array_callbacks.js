const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

let arr = [];

//every
arr = nums.every((x) => {
    return x >= 0;
})
console.log(arr);

arr = panagram.every((x) => {
    return x.length <= 8;
})
console.log(arr);

//filter
arr = nums.filter((x) => {
    return x < 4;
})
console.log(arr);

arr = panagram.filter((x) => {
    return x.length % 2 == 0;
})
console.log(arr);

//find
arr = nums.find((x) => {
    return x % 5 == 0;
})
console.log(arr);

arr = panagram.find((x) => {
    return x.length >= 5;
})
console.log(arr);

//find index
arr = nums.findIndex((x) => {
    return x % 3 == 0;
})
console.log(arr);

arr = panagram.findIndex((x) => {
    return x.length < 2;
})
console.log(arr);

//for each
arr = nums.forEach((x) => {
    console.log(x * 3);
})
console.log(arr);

arr = panagram.forEach((x) => {
    console.log(x + '!')
})
console.log(arr);

//map
arr = nums.map((x) => {
    return x * 100;
})
console.log(arr);

arr = panagram.map((x) => {
    return x.toUpperCase();
})
console.log(arr);

//some
arr = nums.some((x) => {
    return x % 7 == 0;
})
console.log(arr);

arr = panagram.some((x) => {
    return x.includes('a');
})
console.log(arr);
