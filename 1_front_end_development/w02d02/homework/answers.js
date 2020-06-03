/*
DATATYPES REFRESHER

A light switch that can be either on or off.
=> datatype: boolean 
=> data structure example: const bool = true; 

A user's email address.
=> datatype: string 
=> data structure example: let x = 'sam@gmail.com'; 

A spaceship with a hull, laser blasters, tractor beam, and warp drive.
=> datatype: object 
=> data structure example: let x = {hull, lasers, etc}; 

A list of student names from our class.
=> datatype: array 
=> data structure example: let x = ['name1', 'name2']; 

A list of student names from our class, each with a location.
=> datatype: array of objects
=> data structure example: let x = [{name, location},{name2, location2}]; 

A list of student names from our class, each with a location and each with a list of favorite tv shows.
=> datatype: array of objects 
=> data structure example: let x = [{name, location, [show1, show2]},{name2, location2, [show1, show2]}]; 

*/


//TAKE IT EASY
let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
console.log(rainbow[4]);

let senthil = {
    food: 'pizza',
    hobby: 'hiking',
    town: 'Toronto',
    datatype: 'string',
};
console.log(senthil.hobby);

//CRAZY OBJECT
const crazyObject = {
    taco: [{
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
    },
    {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
    ],
    larry: {
        nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
        quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
        characters: [{
            name: "Jeff",
            occupation: "manager"
        },
        {
            name: "funkhauser",
            occupation: "tv dude"
        },
        {
            name: "susie",
            occupation: "jeffs wife",
            favourtieHobby: "Swearing at Larry and Jeff"
        },
        ]
    }
}

console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1]);
console.log(crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk"));
console.log(crazyObject.larry.quotes[4]);


//OBJECT-CEPTION
const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }
 console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null);

//BOND FILMS

