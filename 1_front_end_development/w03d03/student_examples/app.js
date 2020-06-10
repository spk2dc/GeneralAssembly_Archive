const addH2 = () => {
    let $h2 = $('<h2>').text("Just getting started")
    $('body').prepend($h2)
}

const changeH2 = () => {
    $('h2').text('Changed')
}

const makeSquare = () => {
    const $square = $('<div>').addClass('square')
    $('.container').append($square)
}

const generateQuilt = (numberOfSquares) => {
    for (let i = 1; i <= numberOfSquares; i++) {
        console.log(i)
        const $square = $('<div>').addClass('square');
        $('.container').append($square)
    }
}

const randomColorRGB = () => {
	const red = Math.floor( Math.random() * 256 )
	const green = Math.floor( Math.random() * 256 )
	const blue = Math.floor( Math.random() * 256 )
	return `rgb(${red}, ${green}, ${blue})`
}

const generateSquares = (numberOfSquares) => {
    for (let i = 1; i <= numberOfSquares; i++) {
        console.log(i)
        const $square = $('<div>').addClass('square')
        $square.css('background-color', randomColorRGB())
        $('.container').append($square)
    }
}

$(() => {
    generateSquares(1000)
});