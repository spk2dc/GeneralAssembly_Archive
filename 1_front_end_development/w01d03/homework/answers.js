////////////////////////////////
//  Part II: JavaScript Reps
////////////////////////////////


////////////////////////////////
// Easy Going
////////////////////////////////
for (let index = 1; index <= 20; index++) {
    console.log(index);
}

////////////////////////////////
// Get Even
////////////////////////////////
for (let index = 0; index <= 200; index = index + 2) {
    console.log(index);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let index = 1; index <= 100; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
        console.log("fizzbuzz");
    } else if (index % 3 == 0) {
        console.log("fizz");
    } else if (index % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(index);
    }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

plantee[2] += 1;
wolfy[3] = "Gotham City";
dart.push("Hawkins");
wolfy.splice(0, 1, "Gameboy");

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
let turtles = ["Donatello", 'Leonardo', 'Raphael', 'Michaelangelo'];
for (let iterator of turtles) {
    iterator = iterator.toUpperCase();
    console.log(iterator);
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf('Titanic'));
console.log(favMovies.sort());
console.log(favMovies.pop());
console.log(favMovies.push('Guardians of the Galaxy'));
console.log(favMovies.reverse());
console.log(favMovies.shift());
console.log(favMovies.unshift());
console.log(favMovies.splice(favMovies.indexOf('Django Unchained'), 1, 'Avatar'));
let halfArr = favMovies.slice(favMovies.length / 2);
console.log(halfArr);

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
["Lucinda", "Jacc", "Neff", "Snoop"],
["Petunia", ["Baked Goods", "Waldo"]]];
console.log(whereIsWaldo.splice(whereIsWaldo.indexOf('Eggbert'),1));
console.log(whereIsWaldo[1].splice(whereIsWaldo[1].indexOf('Neff'),1,'No One'));
console.log(whereIsWaldo[2][1].find(element => element == 'Waldo'));

////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////