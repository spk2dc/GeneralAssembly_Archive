
$(() => {

    const changeColor = (event) => {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        const color = 'rgb(' + red + ',' + green + ',' + blue + ')';

        $(event.target).css('background', color);

    }

    const numDivs = (event) => {
        let $box = $('#inputBox')
        console.log($box.val());

        for (let i = 0; i < $box.val(); i++) {
            let $div = $('<div>');
            $div.addClass('square');
            $('#container').append($div);
        }

        $('div.square').on('mouseover', changeColor);
    }

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

