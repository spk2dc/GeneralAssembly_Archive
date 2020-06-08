class Ship {
    constructor(name, hp, fp, acc) {
        this.name = name;
        this.hull = hp;
        this.firepower = fp;
        this.accuracy = acc;
    }

    attack(enemy) {
        if (Math.random() < this.accuracy) {
            console.log(this.name + ' hit ' + enemy.name + '. Power: ' + this.firepower);
            enemy.hull -= this.firepower;

            this.printHull();
            enemy.printHull();
            if (!enemy.checkHull()) {
                console.log(enemy.name + ' destroyed!');
            }

        } else {
            //console.log('MISS! ' + this.name + ' did not hit ' + enemy.name + '. Accuracy: ' + this.accuracy);
            console.log('MISS! ' + this.name + ' did not hit ' + enemy.name);
        }
        console.log('----------------------');
    }

    retreat() {
        console.log('RETREAT! You have lost.');
    }

    checkHull() {
        if (this.hull > 0) {
            return true;
        } else {
            return false;
        }
    }

    printHull() {
        console.log(this.name + ' health: ' + this.hull);
    }
}

let uss = new Ship('USS Schwarz', 20, 5, 0.7);
let alienShips = [];

for (let i = 0; i < 10; i++) {
    let hp = Math.floor(Math.random() * 3 + 3);
    let fp = Math.floor(Math.random() * 2 + 2);
    let acc = Math.random() * 0.2 + 0.6;
    alienShips[i] = new Ship('alien ' + i, hp, fp, acc);
}

//uss.attack(alienShips[0])

for (const i in alienShips) {
    let itr = alienShips[i];

    while (itr.checkHull() && uss.checkHull()) {
        uss.attack(itr);

        if (itr.checkHull()) {
            itr.attack(uss);
        }
    }

    if(itr.checkHull()){
        console.log('LOST THE GAME! ' + itr.name + ' has beat you.');
        console.log('Remaining aliens: ' + (alienShips.length - i));
        break;
    } else{
        console.log('WINNER! You have beat ' + alienShips.length + ' aliens');
    }

}
