// console.log($);
// console.log('modal practice app.js is linked to this index.html');

$(() => {

  //Grabbing Elements
  const $openBtn = $('#openModal');
  const $modal = $('#modal');
  const $closeBtn = $('#close');
  let modalOpened = { val: 'never' };

  //Event Handlers
  const openModal = (modalOpened) => {
    $modal.css('display', 'block').fadeIn(1000);
    modalOpened.val = 'opened';
    console.log(modalOpened);

  }

  const closeModal = () => {
    $modal.css('display', 'none').fadeOut(1000);
  }

  const stopBubble = (event) => {
    event.stopPropagation();
  }

  //Event Listeners
  console.log('outside val: ' + modalOpened.val);
  $openBtn.on('click', () => {
    console.log('before func val: ' + modalOpened.val);
    openModal(modalOpened)
    console.log('after func val: ' + modalOpened.val);

  });

  $closeBtn.on('click', closeModal);

  $('#modal').on('click', closeModal)
  $('#modal-textbox').on('click', stopBubble)

  setTimeout(() => {
    console.log('TIMEOUT outside val: ' + modalOpened.val);

    if (modalOpened.val == 'never') {
      console.log('TIMEOUT before func val: ' + modalOpened.val);
      openModal(modalOpened)
      console.log('TIMEOUT after func val: ' + modalOpened.val);
    }
  }, 5000)


});
