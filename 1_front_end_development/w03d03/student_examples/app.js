$(() => {
    const addH2 = () => {
        let $h2 = $('<h2>').text("Just getting started")
        $('body').prepend($h2)
    }

    addH2()


});