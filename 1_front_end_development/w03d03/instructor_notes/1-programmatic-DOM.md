# Programmatic DOM

## Lesson objectives

_After this lesson students will be able to:_

1. Explain how traditional Javascript ties in with jQuery
1. Add to the DOM with a function
1. Execute code once the DOM has loaded
1. Edit the DOM with a function
1. Add to the DOM with a loop
1. Use data to populate the DOM

## Explain how traditional Javascript ties in with jQuery

jQuery **is** JavaScript, it just looks different to the regular JS.

We can use JavaScript control flow patterns with jQuery. That means **functions**, **loops**, and **conditionals**. Using control flow with our DOM manipulation patterns, we can create some interesting things.

## Add to the DOM with a function

Set up HTML:

1. add html boilerplate
1. add jQuery script src
1. add `app.js` script src
1. add `main.css` with a link, rel is stylesheet
1. add a `div` with a class `container`

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title></title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" charset="utf-8"></script>
        <script src="app.js" charset="utf-8"></script>
        <link rel="stylesheet" href="main.css">
    </head>
    <body>
      <div class="container">

      </div>
    </body>
</html>
```

Write a function that will add an `h2` with the text "Just getting started" to the body of the page.  Create `app.js` and add the following to it

```javascript
  const addH2 = () => {
    let $h2 = $('<h2>').text("Just getting started")
    $('body').prepend($h2)
  }

  addH2()
```

## Execute code once the DOM has loaded

If nothing shows up when you run the function, why might that be? Hint: has the DOM loaded before the script runs?

```javascript
$(() => {
  const addH2 = () => {
    $h2 = $('<h2>').text("Just getting started")
    $('body').prepend($h2)
  }

  addH2()
}) // close document on ready
```

We can move the `addh2` function outside of the window onload function. Question: does the following code work? Why or why not:

```javascript
// Code is loaded before DOM loaded
const addh2 = () => {
  $newH2 = $('<h2>').text('GOOD MORNING!')
  $('body').prepend($newH2)
}

// Code is loaded after DOM loaded                                                            
$(() => {

  addh2()

})  // close document on ready
```

## Edit the DOM with a function

Write another function that will change the first existing `h2` in the DOM tree (on the page) to have the text "Getting warmed up"

```javascript
const addH2 = () => {
	$h2 = $('<h2>').text("Just getting started")
	$('body').prepend($h2)
}

const changeH2 = () => {
	$('h2').text("Getting warmed up")
}

$(() => {
	addH2()
	changeH2()
})  // close document on ready
```

## Add to the DOM with a loop

Here is a nice quilt:

![](https://i.imgur.com/vBwqImN.png)

Let's build a digital quilt! It's not going to be too easy on the eyes. In fact, it's going to be a horrible quilt.

What we are aiming at is this:

![](https://i.imgur.com/h3XdFZj.png)

Eventually, we would like to invoke a function `generateQuilt()` that will build the quilt on the page. We would like to specify how many squares the quilt has: `generateQuilt(1000)` would build a quilt with 1000 randomly-colored squares.

First goal: add 1000 divs to the DOM

* Write a for loop that counts from 1 to 1000

```javascript

const generateQuilt = () => {
  for (let i=1; i <= 1000; i++) {
  	console.log(i);
  }
}

$(() => {
  addH2()
  changeH2()
  generateQuilt()
})  // close document on ready
```

* Make a square with jQuery - add a class that gives it shape

```javascript

const makeSquare = () => {
  const $square = $('<div>').addClass('square')
  $('.container').append($square)
}


$(()=>{
  makeSquare()
  makeSquare()
  makeSquare()
  makeSquare()
})  // close document on ready
```

* Add some basic css so we can see our squares and lay them out as a quilt

```css
.container {
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}

.square {
  height: 50px;
  flex-basis: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 1px 1px 1px black;
  border: 1px solid gray;
}
```

* Combine the two and generate many squares, appended to the body each time the loop runs

```javascript

const generateQuilt = () => {
  for (let i=1; i <= 1000; i++) {
    console.log(i)
    makeSquare()
  }
}

$(()=>{
  generateQuilt()
})  // close document on ready
```

This is a DRY way to make a grid of 1000 divs.

### Add to the DOM using a function that runs a loop


Run it multiple times for fun:

```javascript
$(()=>{
	generateQuilt()
	generateQuilt()
	generateQuilt()
	generateQuilt()
})  // close document on ready
```

### Give the function an argument

* Provide the function with a parameter and argument, and run the loop that many times:

```javascript
const generateQuilt = (numberOfSquares) => {
  for (let i=1; i <= numberOfSquares; i++) {
    console.log(i)
    const $square = $('<div>').addClass('square');
    $('.container').append($square)
  }
}

$(()=>{
	generateQuilt(1000)
})  // close document on ready
```

### Color the squares

We can use rgb values for our colors

```css
.square {
	background-color: rgb(25, 241, 84)
}
```

`rgb` stands for **red**, **green**, and **blue**. Each number is between 0 and 255, and says how much red, how much, green, and how much blue to blend.

`rgb(0, 0, 0)` is **black**.

`rgb(255, 255, 255)` is **white**.

[rgb color values](https://www.w3schools.com/colors/colors_rgb.asp)

Let's use it in the loop with `.css()` jQuery method:

```javascript
const generateSquares = (numberOfSquares) => {
  for (let i=1; i <= numberOfSquares; i++) {
    console.log(i)
    const $square = $('<div>').addClass('square')
    $square.css('background-color', 'rgb(23, 240, 83)')
    $('body').append($square)
  }
}
```

The **rgb** value is a **string** within the `.css()` method.

## Color each square with a random color

Let's make a function that will return a **string** with **random rgb values**.

We will generate random values for red, green, and blue, and concatenate them into a return string.

```javascript
const randomColorRGB = () => {
	const red = Math.floor( Math.random() * 256 )
	const green = Math.floor( Math.random() * 256 )
	const blue = Math.floor( Math.random() * 256 )
	return `rgb(${red}, ${green}, ${blue})`
}
```

```javascript
console.log(randomColorRGB())
```

Now we can use the return value of this function in our `.css()` method:

```javascript
$square.css('background-color', randomColorRGB())
```

Since it is inside a loop, it will run each time the loop runs, giving us a random color each time.

### Add text to each square

The quilt is not quite ugly enough. Let's put some numbers in each square.

* Display the number in each square from 1 to 1000 with `$square.text(i)`

```javascript
const generateQuilt = (numberOfSquares) => {
  for (let i=1; i <= numberOfSquares; i++) {
  	console.log(i);
    makeSquare(i)
  }
}

const makeSquare = (number) => {
  const $square = $('<div>').addClass('square')
  $('.container').append($square)
  $square.css('background-color', randomColorRGB())
  $square.text(number)
}
```

### For fun, give each square an id, the same as its number


```javascript
$square.attr('id', 'square' + number)
```

all the javascript

```js
const addH2 = () => {
  $h2 = $('<h2>').text("Just getting started")
  $('body').prepend($h2)
}

const changeH2 = () => {
  $('h2').text("Gloriously Hideous Digital Quilt")
}


const generateQuilt = (numberOfSquares) => {
  for (let i=1; i <= numberOfSquares; i++) {
    console.log(i);
    makeSquare(i)
  }
}

const makeSquare = (number) => {
  const $square = $('<div>').addClass('square')
  $('.container').append($square)
  $square.css('background-color', randColorRGB())
  $square.text(number)
  $square.attr('id', 'square' + number)
}

const randomColorRGB = () => {
  const red = Math.floor( Math.random() * 256 )
  const green = Math.floor( Math.random() * 256 )
  const blue = Math.floor( Math.random() * 256 )
  return `rgb(${red}, ${green}, ${blue})`
}


$(() => {
  addH2()
  changeH2()
  generateQuilt(1000)
})


```
