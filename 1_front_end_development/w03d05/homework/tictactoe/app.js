let globIsX = true;

let board = () => {
    for (let i = 0; i < 9; i++) {
        let $div = $('<div>');
        $div.addClass('square ' + 's' + i);
        $div.on('click', clickFunc)
        $('#container').append($div);
    }
}

let clickFunc = (event) => {
    let $div = $(event.currentTarget)
    let divClass = $div.attr('class')
    console.log(divClass);

    if (divClass.includes('X') || divClass.includes('O')) {
        return;
    } else if (globIsX) {
        globIsX = false;
        $div.text('X').toggleClass('X')
    } else {
        globIsX = true;
        $div.text('O').toggleClass('O')
    }

}

$(() => {

    board()



});

