class Hero {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.objects = {
            sprinkleSpray: 5,
            sugarShock: 10
        };
        this.catchPhrases = ['i\'m fresher than day old pizza',
            'you can\'t count my calories']
    }

    talkSass() {
        console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]);
    }

    announceHealth() {
        console.log(this.health);
    }

    battle(){
        console.log('i\'m ready to rumble');
    }
}

let dougie = new Hero('Dougie Donut');