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