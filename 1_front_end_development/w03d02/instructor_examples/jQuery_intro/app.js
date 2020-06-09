$(() => {

  // if (typeof $ == 'undefined'){
  //   console.log('oops! I still have to link my jQuery properly!');
  // } else {console.log('I did it! I linked jQuery and this js file properly!')};
  
  const $div = $('<div>');
  console.log($div);

  $div.addClass('meat');

  const $h3 = $('<h3>');
  $h3.text('Ostrich');
  $div.append($h3);

  const $div2 = $('<div>');
  $div2.addClass('dairy');
  const $div2Text = $('<h3>');
  $div2Text.text('Butter');
  $div2.append($div2Text);
  
  const $body = $('body');
  console.log($body);
  $body.append($div);
  $body.append($div2);

  // const $meats = $('.meat');
  // $meats.hide();

  const $img = $('<img>');
  $img.attr('src', 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D');
  $body.prepend($img);

  const $allDivs = $('div');
  $allDivs.eq(2).children().text('Kohlrabi');

  const $newH3 = $('<h3>');
  $newH3.text('Cheese');
  const $secondDiv = $allDivs.eq(1);
  $secondDiv.empty();
  $secondDiv.append($newH3);
  // $allDivs.eq(1).empty().append($newH3);

  $body.css('border', '1em solid black');
  
});
