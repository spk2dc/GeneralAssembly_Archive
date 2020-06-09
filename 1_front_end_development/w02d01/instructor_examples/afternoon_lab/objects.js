// -- Syntax --
// {} curly braces define the object
// text keys designate the names of the object's properties
// : colons separate keys from values in properties
// any value can come after the colon

// -- Me, Me, Me --

let me = {
    name: 'James',
    age: 99,
    email: 'james.godfreykittle@generalassemb.ly',
};

console.log(me.name);
me.age = 1000;
console.log(me.age);
me['place of residence'] = 'Decatur';
console.log(me['place of residence']);

// -- Slimer --

const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something",
}

console.log(monster.name);
monster.type = 'new type';
monster.age = 6;
console.log(monster);

// -- Ogres --

const adventurer = {
    name: 'Zelda',
    hitpoints: 100,
    satchel: ['Candle', 'Rupee', 'Boomerang', 'Chair'],
};

const ogre = {
    hitpoints: 100,
};

let adventurer_turn = true;
while (adventurer.hitpoints > 0 && ogre.hitpoints > 0) {
    let damage = Math.floor(100 * Math.random());
    if (adventurer_turn) {
        ogre.hitpoints -= damage;
        console.log('adventurer attacks and does ' + damage + ' damage!');
        console.log('ogre hitpoints: ' + ogre.hitpoints);
    } else {
        adventurer.hitpoints -= damage;
        console.log('ogre attacks and does ' + damage + ' damage!');
        console.log('adventurer hitpoints: ' + adventurer.hitpoints);
    }
    adventurer_turn = !adventurer_turn;
}

// -- Cat Combinator --

const cat1 = {
    name: 'Jam',
    breed: 'Siamese',
    age: 45,  // ...months??
};

const cat2 = {
    name: 'Joe',
    breed: 'Mog',
    age: 19,
};

const combineCats = (mama, papa) => {
    return {
        name: mama.name + papa.name,
        breed: mama.breed + '-' + papa.breed,
        age: 1,
    };
}

// -- Cat Brain Bender --

console.log(
    combineCats(
        combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),
        combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));
