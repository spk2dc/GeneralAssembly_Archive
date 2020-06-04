let crayonBox = {
    crayons: ['blue', 'yellow', 'red'],
};
console.log(crayonBox.crayons[0]);

let bottle = {
    cap: {
        color: ['blue', 'yellow', 'red'],
        material: 'metal'
    }

};
console.log(bottle.cap.color[0]);

let receipt = [{ name: 'store', price: '$1' }, { name: 'store2', price: '$2' }];
console.log(receipt[0].name);


let apartment = [['sam', 'sally']];
console.log(apartment[0][1]);

let knit = () => {
    return { item: 'scarf', size: '6ft' };
}
console.log(knit().item);

let crayonSelect = () => {
    return crayonBox;
}
console.log(crayonSelect().crayons[2]);

let powerButton = () => {
    let options = () => {
        console.log('select a song');
    }
    return options;
}
powerButton()();

let vending = {
    snacks: [{
        name: 'chips',
        price: '$1'
    },
    {
        name: 'cookies',
        price: '$1'
    },
    {
        name: 'soda',
        price: '$1'
    },
    ],
    vend: (num) => {
        return vending.snacks[num];
    }
}
console.log(vending.vend(1));

let add = (x, y) => {
    return x + y;
}
let subtract = (x, y) => {
    return x - y;
}
let multiply = (x, y) => {
    return x * y;
}
let divide = (x, y) => {
    return x / y;
}
let calculate = (num1, num2, operate) => {
    return operate(num1, num2);
}
console.log(calculate(2, 3, add));
console.log(calculate(2,3,subtract));
console.log(calculate(2,3,multiply));
console.log(calculate(6,3,divide));




const bar = () => {
    console.log('bar here');
}
const foo = () => {
    console.log('foo here');
}
bar();
foo();

/*
foo();

const foo ()=>{
    console.log('hi');
}

//Error produced is foo has already been declared, can't redefine a const
*/