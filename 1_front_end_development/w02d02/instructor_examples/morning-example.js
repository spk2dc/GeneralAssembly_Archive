const adventurer = {
    name: 'Timothy',
    hitPoints: 10,
    belongings: ['sword', 'potion', 'Tums'],
    companion: {
		name: 'Velma',
        type: 'Bat',
        companion: {
            name: 'Tim',
            type: 'Parasite',
            belongings: ['SCUBA tank', 'Rogan Josh', 'health insurance']
        },
	},
}
// accessing an item in the array
// console.log(adventurer.belongings[0]);

// loop through an array inside of an object
// for (let i=0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i]);
// }

// get the value of an object nested within an object
// console.log(adventurer.companion.type);

// get the value of an object nested in an object nested in an object
// console.log(adventurer.companion.companion.name)

// get the value of an object in an array nested in an object nested in an object nested in an object
// console.log(adventurer.companion.companion.belongings[2])

// const movies = [
//     { id: 2, title: 'Tokyo Story' },
//     { id: 7, title: 'Paul Blart: Mall Cop'},
//     { id: 5, title: 'L\'Avventura'},
// ]

// loop over an array and get the value of the first key
// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i]);
// }

// getting the value of an object in an array
// console.log(movies[0].title);

const monster = {
    name: 'Slimer',
    age: 6,
}

const monsterStats = ['name', 'age'];

// for (let i = 0; i < monsterStats.length; i++) {
//     console.log(monster[monsterStats[i]]);
// }

// console.log(monster[monsterStats[0]]);

const movie = { 
    title: "L'Avventura", 
    director: "Michelangelo Antonioni", 
    year: 1960, 
}

// for (let key in movie) {
//     console.log(movie[key]);
// }


// const keys = Object.keys(movie);
// const values = Object.values(movie);

// console.log(values);

// for (let i=0; i < keys.length; i++) {
// 	console.log(movie[keys[i]]);
// }

const foo = {
    someArray: [1,2,3],
    someObject: {
        someProperty: 'Oh hai!',
    },
    someFunction: () => {
        console.log('Another message');
    },
    arrayOfThings: [ {someProperty: 'weee'} , 2, 3],
    arrayOfArrays: [
        ["0,0", "0,1", "0,2"],
        ["1,0", "1,1", "1,2"],
        ["2,0", "2,1", "2,2"],
    ],
    arrayWithFunction: [
        1,
        "hi",
        ()=>{
            console.log('fun');
        },
    ],
}

// return foo.arrayWithFunction[2]();







