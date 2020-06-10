
const addImage = () => {
    let arr = ['https://i.imgur.com/XluMKK9.png', 'https://i.imgur.com/HKnfOir.jpeg', 'https://i.imgur.com/jaH7r2A.jpg', 'https://i.imgur.com/dteXdiv.jpeg', 'https://i.imgur.com/RASv4KS.jpeg', 'https://i.imgur.com/8J3XpiD.jpeg'];

    let $img = $('<img>')
    $img.attr('src', arr[Math.floor(Math.random() * arr.length)])
    $img.css('max-width', 100)
    $img.css('max-height', 100)

    $img.on('click', ()=>{
        removeImage($img)
    })

    $('.container').append($img)
    //$('.container').append($('<div>').append($img))
}

const removeImage = ($img) => {
    console.log('remove');
    $img.remove();
}

$(() => {
    let $div = $('<div>').addClass('square').text('Add random image')
    $('.container').append($div)

    $div.on('click', addImage)
})