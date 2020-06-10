const addH2 = () => {
    $h2 = $('<h2>').text("Just getting started")
    $('body').prepend($h2)
}

const changeH2 = () => {
    $('h2').text("Gloriously Hideous Digital Quilt")
}


const generateQuilt = (numberOfSquares) => {
    for (let i = 1; i <= numberOfSquares; i++) {
        console.log(i);
        makeSquare(i)
    }
}

const makeSquare = (number) => {
    const $square = $('<div>').addClass('square')
    $('.container').append($square)
    $square.css('background-color', randomColorRGB())
    $square.text(number)
    $square.attr('id', 'square' + number)
}

const makeSquareContainer = (number, $container) => {
    const $square = $('<div>').addClass('square')
    $container.append($square)
    $square.css('background-color', randomColorRGB())
    $square.text(number)
    $square.attr('id', 'square' + number)
}

const randomColorRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
}

const grid64 = () => {
    let $container = $('.container')
    for (let i = 0; i < 8; i++) {
        let $div = $('<div>').addClass('row')
        $container.append($div)

        for (let j = 0; j < 8; j++) {
            const $square = $('<div>').addClass('square')
            $('.row').eq(i).append($square)

            if ((i * 8 + j) % 2 == 0) {
                $square.css('background-color', 'red')
            } else {
                $square.css('background-color', 'black')
            }

            if (i % 2 == 1 && j % 2 == 1 || i % 2 == 0 && j % 2 == 0) {
                $square.css('background-color', 'red')
            } else {
                $square.css('background-color', 'black')
            }

            $square.text(i * 8 + j)
            $square.attr('id', 'square' + (i * 8 + j))

        }

    }
}

const pyramid = (num) => {
    let $container = $('.container')
    for (let i = 0; i < num; i++) {
        let $div = $('<div>').addClass('trirow')
        $container.append($div)

        for (let j = 0; j < i + 1; j++) {
            const $triangle = $('<div>').addClass('triangle')
            $('.trirow').eq(i).append($triangle)

            $triangle.text(i * (i + 1) / 2 + j)
            $triangle.attr('id', 'triangle' + (i * (i + 1) / 2 + j))

        }

    }
}

$(() => {
    grid64()
    pyramid(6)
})