$(() => {
    console.log('test');

    const $div1 = $('<div>')
    $div1.attr('id', 'top-container')
    let $h1 = $('<h1>').text('Trois couleurs: rouge, blanc, et blue')
    $div1.append($h1)

    for (let i = 0; i < 3; i++) {
        let $div2 = $('<div>').addClass('couleur')
        $div2.addClass('sub' + i)
        $div1.append($div2)
    }

    $('body').append($div1)
    

    $('.couleur').css('height', '200px')
    $('.couleur').css('width', '200px')
    $('.couleur').css('display', 'inline-block')
    $('.sub0').css('background-color',
        'firebrick')
    $('.sub1').css('background-color',
        'ivory')
    $('.sub2').css('background-color',
        'cornflowerblue')



});