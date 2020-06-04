class Pet {
    constructor(name) {
        this.human = 'human';
        this.name = name;
    }
    walk (){
        console.log('walka walka');
    }
}
let pet1 = new Pet('bird');
console.log(pet1)
pet1.walk()

class Dog extends Pet {
    constructor(name) {
        super(name);
        this.breed = 'german shepard';
    }
    bark (){
        console.log('bark');
    }
    chaseTail (){
        console.log('oh boy');
    }
    getBreed (){
        console.log(this.breed);
    }
}
let dog1 = new Dog('dog');
console.log(dog1)
dog1.bark();
dog1.chaseTail();
dog1.walk();
dog1.getBreed();


class Cat extends Pet {
    constructor(name) {
        super(name);
        this.breed = 'siamese';
    }
    purr (){
        console.log('purring');
    }
    clean (){
        console.log('cleaning');
    }
    getBreed (){
        console.log(this.breed);
    }
    walk(){
        console.log('strut')
    }
}
let cat1 = new Cat('cat');
console.log(cat1)
cat1.purr();
cat1.clean();
cat1.getBreed();
cat1.walk();

dog1.name = 'new dog1';
console.log(dog1);
cat1.breed = 'new cat breed'
console.log(cat1);
cat1.getBreed();