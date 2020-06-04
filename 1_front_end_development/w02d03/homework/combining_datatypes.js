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

