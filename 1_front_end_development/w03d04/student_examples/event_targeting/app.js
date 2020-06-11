let handOfCards = []

$(()=> {
  const $card = $('.card').on('click', (event)=>{
    $(event.currentTarget).toggleClass('card-back')
    playHand()
  })
})

const playHand = () => {
    if (handOfCards.length === 2) {
      checkHand()
    } else  {
      handOfCards.push($(event.currentTarget).children().eq(1).text())
      // if after pushing the length is NOW 2
      if (handOfCards.length === 2) {
        playHand()
      }
    }
  }

const checkHand = () => {
    console.log('Ok I will check your cards', handOfCards)
    if (handOfCards[0] === handOfCards[1]) {
      $('body').append(`<h2>It's a match!</h2>`)
    } else {
      $('body').append(`<h2>It's NOT a match!</h2>`)
    }
    handOfCards = []
}
