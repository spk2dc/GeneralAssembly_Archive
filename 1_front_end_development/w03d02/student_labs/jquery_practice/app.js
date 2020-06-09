$(() => {
    console.log('test');
    
    const $div1 = $('<div>').attr('id', 'top-container')
    let $h1 = $('h1').text('Trois couleurs: rouge, blanc, et blue')
    $div1.append($h1)

    for (let i = 0; i < 3; i++) {
        let $div2 = $('<div>').addClass('couleur')
        $div1.append($div2)
    }
    
    $('.couleur').css('height', '200px')
    $('.couleur').css('width', '200px')
    $('.couleur').css('display', 'inline-block')
    $('.couleur').css('background-color',
        'black')

    $('body').append($div1)

});