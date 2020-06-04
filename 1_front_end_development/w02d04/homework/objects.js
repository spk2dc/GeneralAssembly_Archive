class Hamster {
    constructor(name) {
        this.owner = '';
        this.name = name;
        this.price = 15;
    }

    wheelRun() {
        console.log('squeak');
    }
    eatFood() {
        console.log('nibble');
    }
    getPrice() {
        return this.price;
    }
}


class Person {
    constructor(name) {
        this.age = 0;
        this.name = name;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }

    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log('hello ' + this.name);
    }
    eat() {
        this.weight++;
        this.mood++;
    }
    exercise() {
        this.weight--;
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}