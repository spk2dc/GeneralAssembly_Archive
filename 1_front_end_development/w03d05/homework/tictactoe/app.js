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

        //if text is empty cannot win
        if (divText[i].length > 0) {
            //check rows to see if winner
            if (i == 2 || i == 5 || i == 8) {
                if (divText[i] == divText[i - 1] && divText[i] == divText[i - 2]) {
                    winner = divText[i]

                }
            }
            //check columns to see if winner
            if (i >= 6) {
                if (divText[i] == divText[i - 3] && divText[i] == divText[i - 6]) {
                    winner = divText[i]

                }
            }
            //check diagonals to see if winner
            if (i == 8) {
                if (divText[i] == divText[i - 4] && divText[i] == divText[i - 8]) {
                    winner = divText[i]
                }

                if (divText[i - 2] == divText[i - 4] && divText[i - 2] == divText[i - 6]) {
                    winner = divText[i]
                }
            }
        } else {
            allDivsFilled = false;
        }
    }

    console.log(allDivsFilled);
    console.log(winner.length);

    if (winner.length > 0) {
        console.log(`Player ${winner} wins!`);
        $('div.square').addClass('end')
    } else if (allDivsFilled) {
        console.log(`Tie. No one wins.`);
        $('div.square').addClass('end')
    } else {
        console.log(`Keep playing`);
    }
}

let endGame = (event) => {

}

$(() => {

    board()



});

