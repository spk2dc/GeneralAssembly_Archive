let globIsX = true;

let board = () => {
    for (let i = 0; i < 9; i++) {
        let $div = $('<div>');
        $div.addClass('square');
        $div.attr('id', i)
        $div.on('click', clickFunc)
        $('#container').append($div);
    }
}

let clickFunc = (event) => {
    let $div = $(event.currentTarget)
    let divClass = $div.attr('class')

    if (divClass.includes('X') || divClass.includes('O') || divClass.includes('end')) {
        return;
    } else if (globIsX) {
        globIsX = false;
        $div.text('X').toggleClass('X')
    } else {
        globIsX = true;
        $div.text('O').toggleClass('O')
    }

    winFunc()
}

let winFunc = (event) => {
    let $div = $('div.square')
    let divText = []
    let winner = "";
    let allDivsFilled = true;


    for (let i = 0; i < $div.length; i++) {
        divText[i] = $div.eq(i).text()

        //if text is not empty check if winner
        if (divText[i].length > 0) {
            //check rows to see if winner
            if (i == 2 || i == 5 || i == 8) {

                if (divText[i] == divText[i - 1] && divText[i] == divText[i - 2]) {

                    winner = divText[i]
                    console.log(`row ${divText[i]},${divText[i - 1]},${divText[i - 2]}`);

                }
            }
            //check columns to see if winner
            if (i >= 6) {

                if (divText[i] == divText[i - 3] && divText[i] == divText[i - 6]) {

                    winner = divText[i]
                    console.log(`column ${divText[i]},${divText[i - 3]},${divText[i - 6]}`);

                }
            }
            //check diagonal to see if winner
            if (i == 8 && divText[i] == divText[i - 4] && divText[i] == divText[i - 8]) {

                winner = divText[i]
                console.log(`diagonal ${divText[i]},${divText[i - 4]},${divText[i - 8]}`);

            }
            //check reverse diagonal to see if winner
            if (i == 6 && divText[i] == divText[i - 2] && divText[i - 2] == divText[i - 4]) {

                winner = divText[i]
                console.log(`diagonal reverse ${divText[i]},${divText[i - 2]},${divText[i - 4]}`);

            }

        } else {
            //if any box is empty set false to keep playing or check if tie game
            allDivsFilled = false;
        }

    }

    console.log('all squares filled: ' + allDivsFilled);
    console.log('winner length: ' + winner.length);
    console.log('all squares array: ' + divText);


    if (winner.length > 0) {
        $('#endtext').text(`Player ${winner} wins!`)
        openModal()
        console.log(`Player ${winner} wins!`);
        $('div.square').addClass('end')
    } else if (allDivsFilled) {
        $('#endtext').text(`Tie. No one wins.`)
        openModal()
        console.log(`Tie. No one wins.`);
        $('div.square').addClass('end')
    } else {
        console.log(`Keep playing`);
    }
}

const openModal = () => {
    $('#modal').css('display', 'block')
}

const closeModal = () => {
    $('#modal').css('display', 'none')
}

const stopBubble = (event) => {
    event.stopPropagation();
}

$(() => {

    board()
    $('#close').on('click', closeModal)
    $('#modal').on('click', closeModal)
    $('#modal-textbox').on('click', stopBubble)

});

