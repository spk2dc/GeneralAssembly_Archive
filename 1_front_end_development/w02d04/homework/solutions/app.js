class Denizen {
  constructor (name, weapons, catchPhrases, battleCry, health = 100) {
    this.battleCry = battleCry
    this.catchPhrases = catchPhrases
    this.health = health
    this.name = name
    this.weapons = weapons
  }

  announceHealth () {
    console.log(`${this.name} says: You can't bring me down! I'm ${this.health} hitpoints strong!`)
  }

  fight (enemy) {
    console.log(`${this.name} says ${this.battleCry}`)
    // advanced access weapons - for simple/basic hw way see Enemy or Hero class
    const weaponOptions = Object.keys(this.weapons)
    const selectWeapon = weaponOptions[this.randomNumGenerator(weaponOptions)]
    enemy.health -= this.weapons[selectWeapon]
    enemy.announceHealth()
  }

  randomNumGenerator (arr) {
    return Math.floor(Math.random() * arr.length)
  }

  talk () {
    const sayThis = this.catchPhrases[this.randomNumGenerator(this.catchPhrases)]
    console.log(sayThis)
  }
}

class Hero extends Denizen {
  talkSass () {
    super.talk()
  }

  // fight (enemy) {
  //   // super.fight()
  //   // simple hard code and access just sugarShock or sprinkleSpray
  // }
}

class Enemy extends Denizen {
  talkSmack () {
    super.talk()
  }

  // fight (enemy) {
  //   // super.fight()
  //   // simple hard code and access just cheeseGrease or pepperoniStars
  // }
}

const dougie = new Hero(
  'Dougie',
  { sprinkleSpray: 5, sugarShock: 10},
  ['i\'m fresher than day old pizza', 'you can\'t count my calories'],
  'i\'m ready to rumble'
)

const pizzaRat = new Enemy(
  'Pizza Rat',
  { pepperoniStars: 5, cheeseGrease: 10 },
  ['i\'m youtube famous', 'i\'m more dangerous than an uncovered sewer'],
  "I'm gonna flatten you like a slice of pepperoni!"
)

dougie.talkSass()
pizzaRat.talkSmack()
dougie.announceHealth()
pizzaRat.announceHealth()

dougie.fight(pizzaRat)
pizzaRat.fight(dougie)

// game

while (dougie.health > 5 && pizzaRat.health > 5) {
  dougie.fight(pizzaRat)
  pizzaRat.fight(dougie)
}

if (dougie.health <= 5) {
  console.log("Dougie lays on the street, his sprinkles in total disarray... and mutters this isn't over... my best friend is a bear claw!")
}

if (pizzaRat.health <= 5) {
  console.log("Pizza Rat lays on the street, with not a speck of pizza to be found... and mutters you'll regret this day and you'll never ever have more youtube viewers than me!")
}
