let me = {
    name: "Kristyn",
    age: 98,
    email: "kristyn@foo.bar",
}

console.log(me.name);
me.age = 1000;
console.log(me.age);
me['place of residence'] = "hometown";
console.log(me['place of residence']);


const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something"
}
console.log(monster.name);
console.log(monster.type = "creature");
console.log(monster.age = 6);
console.log(monster);

const adventurer = {
    name: "person",
    hitpoints: 10,
    attack: 1,
}
const ogre = {
    name: "ogre1",
    hitpoints: 5,
    attack: 1,
}
for (let i = 0; i <= adventurer.hitpoints; i++) {
    console.log(ogre);
    console.log(adventurer);

    ogre.hitpoints -= adventurer.attack;
    adventurer.hitpoints -= ogre.attack;
}

let cat1 = { name: "Craig", age: 20, breed: "unknown" };
let cat2 = { name: "Linda", age: 20, breed: "undefined" };

let combineCats = (mom, dad) => {
    let child = {
        name: mom.name + dad.name,
        age: 1,
        breed: mom.breed + "-" + dad.breed
    }
    return child;
}

console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));

