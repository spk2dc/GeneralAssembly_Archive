let input = (event) => {
    let $input = $('#input-box')
    let $li = $('<h4>').text($input.val()).addClass('to-do-item')

    let $button = $('<button>').text('COMPLETED')
    $button.addClass('to-do-item')
    $button.on('click', done)

    $li.append($button)
    $('#to-do-list').append($li)

}

let done = (event) => {
    let $button = $(event.currentTarget)
    let $li = $button.parent()

    if ($button.text() === "COMPLETED") {
        $button.text('REMOVE')
        $button.removeClass('to-do-item')
        $button.addClass('done-item')

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