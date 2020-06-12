# Sketchpad

## LESSON OBJECTIVES

## Generate DOM elements in a for loop

In this lesson we will be implementing a sketchpad. The user can draw on the sketchpad by moving their mouse over it.

We are going to make 1000 square divs for our sketchpad. Each div will have the same event handler to change color on mouseover.

The goal is to generate 1000 divs in a for loop and append them to the body:

* Write a loop that counts up to 1000
* Inside the loop, create a div
* Give the div a class of `square` (just for display purposes)
* Append the div to the `body`
* Check in the Elements tab in your console to see if you have 1000 divs with class 'square'

```javascript
$(()=>{
	for (let i = 0; i < 1000; i++) {
		let $div = $('<div>');
		$div.addClass('square');
		$('body').append($div);
	}
});
```

### Change the Square Color on MouseOver

Now, we can add an eventListener to the div within the loop. For our sketchpad, we don't want a 'click'. Instead, we can use a 'mouseover'.

* set an event listener one time within the loop. The first argument for the listener should be `mouseover` instead of `click`. For the second argument, use a named handler function called `changeColor`
* Write the `changeColor` function above and outside the loop.
* The handler function will add a class `pink` that will make the _target_ element pink. To locate the target element, use `$(event.target)`.

Even though we set the _same_ click listener and handler on each div, we can target each individual div with `$(event.target)`.

```javascript
$(() => {

	const changeColor = (event) => {
		$(event.target).addClass('pink');
	}

	for (let i = 0; i < 1000; i++) {
		let $div = $('<div>');
		$div.addClass('square');
		$('body').append($div);
	}
	
	$('div').on('mouseover', changeColor);
});
```

## SKETCHPAD ACTIVITY

### Activity in groups (20 mins)

FIGURE IT OUT

* Using an input field, make it so that the user can decide how many divs there are!

* There will be an input box and a button. When the button is clicked, it will grab the user's input from the input box.

* The value from the input box can be used in the control panel of your for loop

STEPS:

Add an input box and a button to the html:

```html
<input id="inputBox" type="text" placeholder="grid size"/>
<button id="inputButton">SUBMIT</button>
```

* Above your for loop (NOT inside the loop) Grab both the input box and button in your js
* Set an event listener on the button.
* When it is clicked, inside the handler capture the input with `inputBox.val()`. `console.log(inputBox.val())`

Where should the code that generates your divs reside? Inside the button's click handler? What is the sequence of events?

How can you change your for loop to generate the number of divs that you grabbed from the input box? Do you need to change the input from a string to a number?

### SUPER FIGURE IT OUT

* Make it so that when the user mouses over a square, a _random_ color will appear, not just pink. There are many different ways to solve this problem. The important thing is that you try to tackle it rather than that you solve it.

* Make it so that the square divs are contained inside a container div of fixed height and width. Depending on how many divs the user decides to make, the divs should alter their _size_ to fit the container!
