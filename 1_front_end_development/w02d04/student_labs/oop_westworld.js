let host = {
    name: 'name1',
    occupation: 'job1'
}

class BasicHost {
    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }

    saySpecs() {
        console.log('My name is ' + this.name + 'and my job is ' + this.occupation);
    }
}

var host1 = new BasicHost("Roget", "creator of Roget's Thesaurus");
console.log(host1);

var host2 = new BasicHost("Sam", "creator of Sam's Thesaurus");
host2.saySpecs();


//Populate the world with hosts
const names = [
    "Laila", "Jack", "Harley", "Hertha", "Darren", "Jolene",
    "Loura", "Lona", "Davida", "Reena", "Leland", "Ta", "Jen",
    "Linn", "Roslyn", "Margorie", "Rafaela", "Romona", "Shanel", "Stan"
];
const occupations = [
    "Clerical assistant", "Leaflet distributor", "Landowner",
    "Special constable", "Anaesthetist", "Park-keeper", "Butler",
    "Choreographer", "Blacksmith", "Chef", "Legal secretary",
    "Song writer", "Librarian", "Landscape gardener"
];

let hostArray = [];
for (let i = 0; i < 100; i++) {
    hostArray.push(new BasicHost(names[Math.floor(Math.random() * names.length)], occupations[Math.floor(Math.random() * occupations.length)]));
}
console.log(hostArray);
hostArray[55].saySpecs()


