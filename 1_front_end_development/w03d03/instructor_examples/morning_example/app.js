const addH2 = () => {
    let $h2 = $('<h2>').text("Just getting started");
    $('body').prepend($h2);
}

const changeH2 = () => {
    $('h2').text("Getting warmed up")
}

const makeSquare = () => {
    const $square = $('<div>').addClass('square')
    $square.css('background-color', 'rgb(23, 240, 83)')
    $('.container').append($square)
}

const generateQuilt = (numberOfSquares) => {
    for (let i = 0; i < numberOfSquares; i++) {
        makeSquare();
        console.log(i);
    }
}

const randomColorRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
}

const generateSquares = (numberOfSquares) => {
    for (let i = 1; i < numberOfSquares; i++) {
      const $square = $('<div>').addClass('square')
      $square.css('background-color', randomColorRGB())
      $square.text(i)
      $square.attr('id', 'square' + i)
      $('.container').append($square)
    }
  }

$(() => {
    addH2();
    changeH2();
    generateSquares(1000);
}) // close document on ready

