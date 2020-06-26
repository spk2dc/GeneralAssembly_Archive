# New

## Lesson Objectives

1. Create a new route and page
1. Add interactivity to your site with forms
1. Redirect the user to another page


Next, we want to be able to create a new fruit. Let's review our 7 restful routes:


|#|Action|URL|HTTP Verb|EJS view filename|
|:---:|:---:|:---:|:---:|:---:|
|1| Index | /fruits/ | GET | index.ejs |
|2| Show | /fruits/:index | GET | show.ejs |
|3| **New** | **/fruits/new**| **GET** | **new.ejs** |
|4| Create | /fruits/ | POST| none |
|5| Edit ||||
|6| Update ||||
|7| Destroy |||||

## Create a new route and page

1. Let's create a page that will allow us to create a new fruit using a form
1. First, we'll need a route for displaying the page in our server.js file **IMPORTANT: put this above your show route, so that the show route doesn't accidentally pick up a /fruits/new request**

    ```javascript
    //put this above your show.ejs file
    app.get('/fruits/new', (req, res) => {
        res.render('new.ejs');
    });
    ```

1. Now lets's create the html for this page in our /views/new.ejs file

- `touch views/new.ejs`

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>New Form</title>
  </head>
  <body>

  </body>
</html>
```


1. Visit http://localhost:3000/fruits/new to see if it works

## Add interactivity to your site with forms

We can use forms to allow the user to enter their own data:


Breaking down the parts of a form

- `<form>` - this encompasses all the elements in a form
  - `action` where should this form be sent (for us it will be the relative path `/fruits`)
  - `method` - this will be a `POST` route, which is in line for our 7 RESTful routes pattern for creating a new fruit
- `<label>` - this is for visual formatting and web accessibility
  - `for` attribute that should match `id` in the companion `input` - again for web accessibility
- `<input />` - a self closing tag
  - `type` we'll use `text`, `checkbox` and `submit` for this project but there are many more like, `number`, `password`... you can always google for a more exhaustive list
  - `name` - this field **MUST** match your key value for your incoming data. This gets parsed as the key with `body-parser`

  For more information on forms you can go [here](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)


```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
      <h1>New Fruit Page</h1>
      <form action="/fruits" method="POST">
        <label for="name">Name</label>
        <input type="text" name="name" id="name"/>
        <label for="color">Color</label>
        <input type="text" name="color" id="color" />
        <label for="readyToEat">Is Ready to Eat</label>
        <input type="checkbox" name="readyToEat" id="readyToEat" />
        <input type="submit" value="Create Fruit">
      </form>
    </body>
</html>
```

In order to have the form submit the information to our server we will need to add two lines to our `server.js` file:

```js
app.use(express.json());
app.use(express.urlencoded({extended: true}));
```
With all of our previous requests we have simply been getting information from the server.  Since we are making a POST request here we need to allow our server to be able to interpret and take in information from our `req.body`.

`app.use(express.json());` allows us to recognize the incoming request as a JSON object.
`app.use(express.urlencoded({extended: true}));` allows us to recognize the incoming object as strings or arrays.

Those following methods are known as middleware and help handle our requests before we send back a response.
Here are a few resources to help explain if you would like to dive deeper into what is happening
[Stack Overflow](https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded)
[Express Docs](http://expressjs.com/en/api.html#express.json)


These lines can go above the route declarations in the file.

### Polishing

Right now, on successful POST, our data is just rendered as JSON. We should redirect it back to our index page or (bonus figure this out!) to the new show page of our new fruit.

```js
// create
app.post('/fruits', (req, res) => {
  console.log(req.body)
  if (req.body.readyToEat === 'on') { // if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true
  } else { // if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false
  }
  fruits.push(req.body)
  res.redirect('/fruits')
})

```

Put a link in the index page going to the new page

```html
<nav>
    <a href="/fruits/new">Create a New Fruit</a>
</nav>
```

Lastly, here is an example of the completed `server.js` file:
```js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// to help with the form submission
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// include the ./model/fruits.js
const fruits = require('./models/fruits.js')


// ROUTES
// fruits index
app.get('/fruits/', (req, res) => {
  res.render('index.ejs', {
    fruits: fruits,
  });
})

// fruits new
app.get('/fruits/new', (req, res) => {
  res.render('new.ejs');
})

// fruits post
app.post('/fruits', (req, res) => {
  console.log(req.body)
  if (req.body.readyToEat === 'on') { // if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true
  } else { // if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false
  }
  fruits.push(req.body)
  res.redirect('/fruits')
})

// fruits show
app.get('/fruits/:indexOfFruits', (req, res) => {
  res.render('show.ejs', {
    fruit: fruits[req.params.indexOfFruits],
  });
})

app.listen(PORT, () => {
  console.log('I am listening');
})
```
