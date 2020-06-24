$(() => {

const onClickSquare = ($square, x, y) => {
    // If the game is already over, or this square already has text, do nothing
    if (gameOver || $square.text()) {
        return;
    }
    // Update the HTML text
    $square.text(currentPlayer);
    // Update the data
    grid[y][x] = currentPlayer;
    // Switch the current player
    currentPlayer = (currentPlayer == 'x') ? 'o' : 'x';
    // Check if someone has won
    checkBoardWin();
}

// Check if someone has won in any vertical, horizontal or diagonal row
const checkBoardWin = () => {
    for (let y = 0; y < 3; y++) {
        checkRowWin(grid[y][0], grid[y][1], grid[y][2]);
    }
    if (gameOver) {
        return;
    }
    for (let x = 0; x < 3; x++) {
        checkRowWin(grid[0][x], grid[1][x], grid[2][x]);
    }
    if (gameOver) {
        return;
    }
    checkRowWin(grid[0][0], grid[1][1], grid[2][2]);
    if (gameOver) {
        return;
    }
    checkRowWin(grid[0][2], grid[1][1], grid[2][0]);
    if (gameOver) {
        return;
    }
    checkTie();
}

// Check if a row of three squares matches
const checkRowWin = (square1, square2, square3) => {
    if (square1 && square1 == square2 && square1 == square3) {
        showModal(square1 + ' wins!');
        gameOver = true;
    }
}

// Check if the board is full. Assumes no one has won.
const checkTie = () => {
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            if (!grid[y][x]) {
                // The board is not full
                return;
            }
        }
    }
    // If we haven't returned yet, that means there is no empty square
    showModal('Tie game!');
    gameOver = true;
}

const showModal = (message) => {
    $('#modal-textbox').text(message);
    $('#modal').css('display', 'flex');
}

const grid = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
let currentPlayer = 'x';
let gameOver = false;

for (let y = 0; y < 3; y++) {
    const $row = $('<div>').addClass('row');
    for (let x = 0; x < 3; x++) {
        const $square = $('<div>').addClass('square');

        // Add borders to square sides contained in grid
        if (x > 0) {
            $square.addClass('border-left');
        }
        if (y > 0) {
            $square.addClass('border-top');
        }

        // Add click listener to square
        $square.on('click', (evt) => {
            onClickSquare($(evt.currentTarget), x, y);
        });

        $row.append($square);
    }
    $('body').append($row);
}

});
