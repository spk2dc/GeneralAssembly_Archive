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
    } else{
        console.log(index);
    }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] += 1;
wolfy[3] = "Gotham City";
dart.push("Hawkins");
wolfy.splice(0,1, "Gameboy");

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


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////