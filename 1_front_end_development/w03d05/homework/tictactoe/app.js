let board = () => {
    for (let i = 0; i < 9; i++) {
        let $div = $('<div>');
        $div.addClass('square');
        $div.on('click', clickFunc)
        $('#container').append($div);
    }
}

let clickFunc = (event) => {
    let $div = $(event.currentTarget)
    $div.text('X')
}

$(() => {

    board()

    let $box = $('#inputBox')
    let $button = $('#inputButton')

    $button.on('click', numDivs)
    $box.on('keypress', (event) => {
        if (event.which == 13) {
            console.log('enter')
            numDivs()
        }
    })


});

