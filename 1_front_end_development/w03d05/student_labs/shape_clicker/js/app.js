console.log('shape clicker js file is connected');

//remember to set up your window onload!
$(() => {

    let clickFunc = (event) => {
        let $div = $(event.currentTarget)
        if ($div.attr('class') == 'triangle') {
            $div.attr('class', 'circle')

        } else if ($div.attr('class') == 'circle') {
            $div.attr('class', 'square')

        } else if ($div.attr('class') == 'square') {
            $div.attr('class', 'triangle-down')

        } else if ($div.attr('class') == 'triangle-down') {
            $div.attr('class', 'octagon')

        } else if ($div.attr('class') == 'octagon') {
            $div.attr('class', 'heart')

        } else if ($div.attr('class') == 'heart') {
            $div.attr('class', 'triangle')
            
        }
        
    }

    $('.triangle').on('click', clickFunc)

})