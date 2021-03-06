console.log("LINKED");

// Dramatis Personae
const hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];


// Our Setting
const lands = ['The-Shire', 'Rivendell', 'Mordor'];

// ====================================
//           Chapters
// ====================================


// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  console.log('making Middle Earth');
  // console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  let $sect = $('<section>').attr('id', 'middle-earth')

  // 2. append the section to the body of the DOM.
  $('body').append($sect)

  // 3. use a for loop to iterate over the lands array that does the following:

  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section
  for (let i = 0; i < lands.length; i++) {
    let $art = $('<article>').attr('id', lands[i])
    $art.append($('<h1>').text(lands[i]))
    $sect.append($art)
  }

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {
  // makeMiddleEarth()
  console.log('making hobbits');

  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)

  // 1. create a 'ul'
  let $ul = $('<ul>')

  // 2. make each hobbit an li element and append it to the 'ul' you just created
  // hint: use the given 'hobbits' array and use a for loop
  for (let i = 0; i < hobbits.length; i++) {
    $ul.append($('<li>').text(hobbits[i]).addClass('hobbit'))
  }

  // 3. also, give each hobbit (`li`) a class of "hobbit"

  // 4. append the ul to the shire
  // hint: get 'The-Shire' by using its id
  $('#The-Shire').append($ul)
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  // makeHobbits()
  console.log('keep it secret and safe');

  // 1. create an empty div with an id of 'the-ring'
  let $div = $('<div>').attr('id', 'the-ring')

  // 2. add the ring as a child of Frodo
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
  $('.hobbit').eq(0).append($div)

  // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
  // keepItSecretKeepItSafe()
  console.log('making baddies');

  // 1. display an unordered list of baddies in Mordor
  let $ul = $('<ul>')
  for (let i = 0; i < baddies.length; i++) {
    $ul.append($('<li>').addClass('baddy').text(baddies[i]))

  }
  // 2. give each of the baddies a class of "baddy"

  // 3. remember to append the ul to Mordor
  $('#Mordor').append($ul)
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {
  // makeBaddies()
  console.log('making buddies');

  // 1. create an aside tag and append it to middle-earth below mordor
  let $aside = $('<aside>')
  $('#middle-earth').append($aside)

  // 2. display an unordered list of buddies in the aside
  let $ul = $('<ul>')
  for (let i = 0; i < buddies.length; i++) {
    $ul.append($('<li>').text(buddies[i]).addClass('buddy'))

  }
  // 3. give each of the buddies a class of "buddy"

  // 4. don't forget to append them to the aside
  $aside.append($ul)

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // makeBuddies()
  console.log('leave shire');

  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
  let $ul = $('#The-Shire').children('ul').detach()
  $('#Rivendell').append($ul)

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  // leaveTheShire()
  console.log('stranger');

  // 1. change the buddy 'Strider' textnode to "Aragorn"
  // hint: You can get a list of elements by tag name, such as 'aside'
  $('.buddy').eq(3).text('Aragorn')
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  // beautifulStranger()
  console.log('forge fellowship');

  // 1. create a new div with an id 'the-fellowship'
  let $div = $('<div>').attr('id', 'the-fellowship')
  // 2. add an h1 with the text 'The Fellowship' to this new div
  $div.append($('<h1>').text('The Fellowship'))
  // 3. append the fellowship to middle-earth
  $('#middle-earth').append($div)
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  $div.append($('#Rivendell').children('ul'))
  $div.append($('aside').children('ul'))

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  // forgeTheFellowShip()
  console.log('balrog');

  // 1. change the 'Gandalf' text to 'Gandalf the White'
  let $gand = $('#the-fellowship').children('ul').eq(1).children('li').eq(0)
  // let $gand = $('#buddy').eq(0)
  $gand.text('Gandalf the White')

  // 2. add a class "the-white" to this element
  $gand.addClass('the-white')

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
  $('.the-white').css('background-color', 'white')
  $('.the-white').css('border', '1px solid grey')

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  // theBalrog()
  console.log('horn of gondor');

  // 1. create a pop-up alert that the horn of gondor has been blown
  alert('Horn of Gondor blown')

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  $('.buddy').eq(4).css('text-decoration', 'line-through')

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  $('.baddy').eq(2).remove()

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  // hornOfGondor()
  console.log('dangerous alone');

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  $('#Mordor').append($('.hobbit').eq(0), $('.hobbit').eq(1), $('<div>').attr('id', 'mount-doom'))
  // $('#Mordor').append($('.hobbit').eq(1))


  // 2. add a div with an id of 'mount-doom' to Mordor
  // $('#Mordor').append($('<div>').attr('id', 'mount-doom'))


};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
  // itsDangerousToGoAlone()
  console.log('we wants it');

  // 1. Create a div with an id of 'gollum' and add it to Mordor
  $('#Mordor').append($('<div>').attr('id', 'gollum'))

  // 2. Move the ring from Frodo and give it to Gollum
  $('#gollum').append($('#the-ring'))

  // 3. Move Gollum into Mount Doom
  $('#mount-doom').append($('#gollum'))
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  // weWantsIt()
  console.log('there and back again');

  // 1. remove Gollum and the Ring from the DOM
  $('#gollum').remove()

  // 2. remove all the baddies from the DOM
  $('.baddy').remove()

  // 3. Move all the hobbits back to the shire
  $('#The-Shire').append($('.hobbit'))

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================



$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
});
