let fridge = [
    { name: 'waffle', wrapped: true, temperature: -5, syrupQuantity: 0 },
    { name: 'syrup', open: false, temperature: 5, quantity: 10 },
];
// Take waffle from refrigerator
let waffle = fridge.find((fridgeItem) => {
    return fridgeItem.name == 'waffle';
});
// If waffle not in refrigerator:
if (!waffle) {
    // Buy waffle from grocery store (not implemented)
    waffle = buyWaffle();
}
// Unwrap waffle
waffle.wrapped = false;
// Toast waffle
waffle.temperature += 40;
// While waffle is still cold:
while (waffle.temperature < 40) {
    // Toast waffle again
    waffle.temperature += 40;
}
// Pull syrup from refrigerator
let syrup = fridge.find((fridgeItem) => {
    return fridgeItem.name == 'syrup';
});
// If syrup was found in refrigerator:
if (syrup) {
    // Warm the syrup
    syrup.temperature += 40;
    // Open the syrup
    syrup.open = true;
    // Pour syrup on waffle
    waffle.syrupQuantity += 1;
    syrup.quantity -= 1;
}
console.log(waffle);
console.log(syrup);
