class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attack(other) {
        alert(this.name + ' attacks ' + other.name + '!');
        if (Math.random() < this.accuracy) {
            alert(this.name + ' hits!');
            other.hull -= this.firepower;
        } else {
            alert(this.name + ' misses!');
        }
    }
}

class AlienShip extends Ship {
    constructor(name) {
        let hull = Math.floor(Math.random() * 4) + 3;
        let firepower = Math.floor(Math.random() * 3) + 2;
        let accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
        super(name, hull, firepower, accuracy);
    }
}

const uss = new Ship('USS Schwarzenegger', 20, 5, 0.7);
const aliens = [];
for (let i = 0; i < 6; i++) {
    aliens.push(new AlienShip('Alien ' + i));
}

let aliensDefeated = 0;
for (let i = 0; i < aliens.length; i++) {
    // Do battle with the alien
    let alien = aliens[i];
    while (uss.hull > 0 && alien.hull > 0) {
        uss.attack(alien);
        if (alien.hull > 0) {
            alien.attack(uss);
        }
    }

    // End the game if the user lost the battle
    if (uss.hull <= 0) {
        alert(uss.name + ' went kabloo-ey!');
        break;
    }

    // Otherwise, end the game if this was the last alien
    alert(alien.name + ' went kabloo-ey!');
    aliensDefeated++;
    if (i == aliens.length - 1) {
        break;
    }

    // Otherwise, prompt user for their next action
    let action = null;
    while (action == null) {
        action = prompt('"attack" or "retreat"?');
        // Keep prompting until the user types "action" or "retreat".
        if (!(action == 'attack' || action == 'retreat')) {
            action = null;
        }
    }
    if (action == 'retreat') {
        break;
    }
}

if (uss.hull > 0) {
    alert('Game over, you defeated ' + aliensDefeated + ' aliens!');
} else {
    alert('Game over, you lose.');
}
