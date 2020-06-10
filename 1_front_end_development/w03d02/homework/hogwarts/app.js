// if (typeof jQuery == 'undefined') {
//     console.log('oops! I still have to link my jQuery properly!');
// } else { console.log('I did it! I linked jQuery and this js file!') };


$(() => {
    const $container = $('#container')
    console.log($container);
    //$('body').css('background-color','white')

    const $h1 = $('<h1>').text('Hogwarts')
    console.log($h1);
    $container.append($h1)
    $container.css('text-align', 'center')

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
    $('.secret').css('opacity', '0.5')
    $ul.css('list-style', 'none')

    //year4
    $container.append($('<h5>').text('Spring 2017'))
    let $table = $('<table>')
    $container.append($table)

    $table.append($('<thead>'))
    let $tr = $('<tr>')
    $tr.append($('<th>').text('day'))
    $tr.append($('<th>').text('classes'))
    $('thead').append($tr)

    $tr = $('<tr>')
    $tr.append($('<td>').text('Monday'))
    $tr.append($('<td>').text('Herbology'))
    $table.append($tr)

    $tr = $('<tr>')
    $tr.append($('<td>').text('Tuesday'))
    $tr.append($('<td>').text('History of Magic'))
    $table.append($tr)

    $tr = $('<tr>')
    $tr.append($('<td>').text('Wednesday'))
    $tr.append($('<td>').text('Divination'))
    $table.append($tr)

    $tr = $('<tr>')
    $tr.append($('<td>').text('Thursday'))
    $tr.append($('<td>').text('Charms'))
    $table.append($tr)

    $tr = $('<tr>')
    $tr.append($('<td>').text('Friday'))
    $tr.append($('<td>').text('Potions'))
    $table.append($tr)

    $table.css('border', '1px solid gray')
    $('th').css('border', '1px solid gray')
    $('td').css('border', '1px solid gray')
    $table.css('margin', '0 auto')

    //year5
    $('h4').eq(1).remove()
    $('li').eq(0).remove()
    $('h4.owl').after('<h4>new wand</h4>')
    $('h4').eq(1).css('color', 'red')

    $('h4.owl').remove()
    $tr = $('<tr>')
    $tr.append($('<td>').text('Pet'))
    $tr.append($('<td>').text('New Snowfire'))
    $('tr').eq(1).after($tr)
    $('tr').eq(2).remove()
    $('h3').after('<h4>Original Snowfire</h4>')
    $('h4').eq(0).addClass('owl')


    //year6
    $('.secret').hide('slow').delay(2000)
    // $('.secret').delay(2000)
    $('.secret').show('slow')

    $('li.owl').addClass('cabbage')
    $('.cabbage').css('color', 'CHARTREUSE')
    $('.cabbage').removeClass('cabbage')

    //year7
    $('h5').text('Fall 2018')
    $('ul').prepend($('<li>').text('butterbeer'))
    $('ul').attr('storage', 'chest')





});