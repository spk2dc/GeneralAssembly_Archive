// if (typeof jQuery == 'undefined') {
//     console.log('oops! I still have to link my jQuery properly!');
// } else { console.log('I did it! I linked jQuery and this js file!') };


$(() => {
    const $container = $('#container')
    console.log($container);

    const $h1 = $('<h1>').text('Hogwarts')
    console.log($h1);
    $container.append($h1)
    let $body = $('body').css('text-align', 'center')

    let $h2 = $('<h2>').text('Senthil')
    let $h3 = $('<h3>').text('Slytherin')
    let $h4 = $('<h4>').text('Snowfire')
    $h4.addClass('owl')
    let $wand = $('<h4>').text('wand')

    $body.append($h2)
    $body.append($h3)
    $body.append($h4)
    $body.append($wand)
    $('.owl').css('font-family', 'fantasy')
});