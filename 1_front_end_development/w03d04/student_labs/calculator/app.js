let calcHTML = () => {
    for (let i = 0; i < 5; i++) {
        let $div = $('<div>').addClass('row r' + i)

        if (i != 0) {
            for (let j = 0; j < 4; j++) {
                let $button = $('<button>').addClass('square button' + (i * 4 + j))
                $button.on('click', input)

                $div.append($button)
            }
        } else {
            $div.append($('<div>').addClass('display'))
        }
        $('.container').append($div)
    }

    $('.button4').text('7')
    $('.button5').text('8')
    $('.button6').text('9')
    $('.button7').text('/')
    $('.button8').text('4')
    $('.button9').text('5')
    $('.button10').text('6')
    $('.button11').text('*')
    $('.button12').text('1')
    $('.button13').text('2')
    $('.button14').text('3')
    $('.button15').text('-')
    $('.button16').text('0')
    $('.button17').text('.')
    $('.button18').text('+')
    $('.button19').text('=')
}

let input = (event) => {
    let $disp = $('.display')
    let str = $disp.text()
    $disp.text(str + $(event.currentTarget).text())
}

$(() => {
    calcHTML()


})
