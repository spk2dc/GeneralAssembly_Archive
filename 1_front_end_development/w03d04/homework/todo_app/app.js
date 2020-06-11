let input = (event) => {
    let $input = $('#input-box')
    let $li = $('<h4>').text($input.val()).addClass('to-do-item')

    let $done = $('<button>').text('COMPLETED')
    $done.on('click', done)

    $li.append($done)
    $('#to-do-list').append($li)

}

let done = (event) => {
    let $button = $(event.currentTarget)
    let $li = $button.parent()

    if ($button.text() === "COMPLETED") {
        $button.text('REMOVE')
        $li.css('background-color', '#ED6495')
        $('#completed').append($li)
    } else if ($button.text() === "REMOVE") {
        $li.remove()
    }
}

$(() => {
    // $('#to-do-list').append('js test')

    $('#submit').on('click', input)
});