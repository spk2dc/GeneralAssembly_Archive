// console.log($);
// console.log('modal practice app.js is linked to this index.html');

$( () => {

  //Grabbing Elements
  const $openBtn = $('#openModal');
  const $modal = $('#modal');
  const $closeBtn = $('#close');
  
  //Event Handlers
  const openModal = () => {
    $modal.css('display', 'block');
  }
  
  const closeModal = () => {
    $modal.css('display', 'none');
  }

  const stopBubble = (event) => {
    event.stopPropagation();
  }
  
  //Event Listeners
  $openBtn.on('click', openModal);
  
  $closeBtn.on('click', closeModal);

  $('#modal').on('click', closeModal)
  $('#modal-textbox').on('click', stopBubble)
  
  setTimeout(openModal, 5000);

  }); //
