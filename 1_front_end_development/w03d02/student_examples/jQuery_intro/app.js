if (typeof $ == 'undefined') {
  console.log('oops! I still have to link my jQuery properly!');
} else { console.log('I did it! I linked jQuery and this js file properly!') };
console.log($);





$(() => {
  let $h3 = $('<h3>').text('Ostrich');
  const $div = $('<div>');
  $div.addClass('meat').append($h3);
  $('body').append($div);

  $h3 = $('<h3>').text('Apple');
  const $div2 = $('<div>');
  $div2.addClass('fruit').append($h3);
  $('body').append($div2);

  const $div3 = $('<div>');
  const $imgNew = $('<img>').attr('src', 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D');
  $div3.append($imgNew)
  $('body').prepend($div3);

  $h3 = $('<h3>').text('Cheese');
  const $allDiv = $('div');
  $allDiv.eq(1).empty();
  $allDiv.eq(1).append($h3);
});