
// let color = "blue";
// let horsepower = 4000;
// let year = 1989;
// let car1 = ['blue', 4000, 1989];
let car1 = {
	color: "blue",
	horsepower: 4000,
	year: 1989,
};
console.log(car1);

car1.color = 'yellow';
console.log(car1);

car1.purchased = true;
console.log(car1);

// To remove the purchased key from car1:
// delete car1.purchased;
// console.log(car1);

// let color2 = "red";
// let horsepower2 = 4000;
// let year2 = 1989;
let car2 = {
	color: "red",
	horsepower: 4000,
	year: 1990,
};

let cars = [car1, car2];
console.log(cars);

console.log('Purchased cars:');
for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    if (car.purchased) {
        console.log(car);
    }
}


let cat = {
    name: 'Garfield',
    favoriteThings: ['Lasagna', 'Sleep', 'Pookie'],
}

let petAges = {
    Garfield: 5,
    Odie: 2,
}

// let petName = 'Garfield';
// console.log(petAges[petName]);


// const obj = {};
// for (var i = 0; i < 10; i++) {
//     obj['key'+i] = 'foo'
// }
// console.log(obj);


// const cat = {};
// cat.name = 'Garfield';
// // Throws an error, because we're trying to re-assign to "cat"
// // const cat = {};
// // cat = { name: 'Garfield' };
// console.log(cat);


// Doesn't work, can't have duplicate keys
// let buroughs = {
//     name: 'Brooklyn',
//     name: 'The Bronx',
// }
// console.log(buroughs);


let numberNamesEnglish = {
    1: 'One',
    2: 'Two',
    3: 'Three',
}
// console.log(numberNamesEnglish[2]);