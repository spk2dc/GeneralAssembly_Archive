// console.log($);
// console.log('modal practice app.js is linked to this index.html');

$(() => {

  //Grabbing Elements
  const $openBtn = $('#openModal');
  const $modal = $('#modal');
  const $closeBtn = $('#close');
  let modalOpened = false;

  //Event Handlers
  const openModal = () => {
    $modal.css('display', 'block').fadeIn(1000);
    return true;
  }

  const closeModal = () => {
    $modal.css('display', 'none').fadeOut(1000);
  }

  const stopBubble = (event) => {
    event.stopPropagation();
  }

  //Event Listeners
  $openBtn.on('click', openModal);
  console.log(modalOpened);
  
  $closeBtn.on('click', closeModal);

  $('#modal').on('click', closeModal)
  $('#modal-textbox').on('click', stopBubble)

  if (!modalOpened) {
    setTimeout(openModal, 5000);
  }


});
