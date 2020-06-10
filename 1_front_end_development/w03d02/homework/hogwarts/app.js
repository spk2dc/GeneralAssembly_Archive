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

    //year2
    let $h2 = $('<h2>').text('Senthil')
    let $h3 = $('<h3>').text('Slytherin')
    let $h4 = $('<h4>').text('Snowfire')
    $h4.addClass('owl')
    let $wand = $('<h4>').text('wand')

    $container.append($h2)
    $container.append($h3)
    $container.append($h4)
    $container.append($wand)
    $('.owl').css('font-family', 'fantasy')

    //year3
    let $ul = $('<ul>').attr('storage', 'trunk')
        
    $ul.append($('<li>').text('butter beer'))
    $ul.append($('<li>').text('invisibility cloak').addClass('secret'))
    $ul.append($('<li>').text('magic map').addClass('secret'))
    $ul.append($('<li>').text('time turner').addClass('secret'))
    $ul.append($('<li>').text('leash').addClass('owl'))
    $ul.append($('<li>').text('jelly beans'))
    $container.append($ul)
    $('.secret').attr('opacity','0.5')
    $ul.attr('list-style-type','none')
});