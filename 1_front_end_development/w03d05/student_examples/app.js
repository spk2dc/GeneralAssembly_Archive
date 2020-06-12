
$(() => {

    const $colorPalette = $('#color-palette');
    const $myPalette = $('#my-palette');
    const $generate = $('#generate');

    const makePalette = () => {
        for (let i = 0; i < 150; i++) {
            const red = Math.floor(Math.random() * 255);
            const green = Math.floor(Math.random() * 255);
            const blue = Math.floor(Math.random() * 255);
            const color = 'rgb(' + red + ',' + green + ',' + blue + ')';

            const $square = $('<div>');
            $square.css('background-color', color);
            $square.addClass('square');
            $colorPalette.append($square);
        }
    }
    $generate.on('click', makePalette);

    makePalette();
});