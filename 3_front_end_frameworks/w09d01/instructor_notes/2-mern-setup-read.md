# MERN Stack

## Lesson Objectives

1. Describe the elements of the MERN stack
1. Set up React using Create React App
1. Get data from our holidays_api app

## Describe the elements of the MERN stack

MERN stack is just a collection of tech that work well together

- Mongo
- Express
- React
- Node.js

We're going to have two apps: One will be our create-react-app that will handle the UX/UI

The other is our backend express API.

It is increasingly common to have a separate back end that just handles data: Desktop and mobile apps are different apps for a user to use, but it makes sense they'd share the backend/data rather than building out that portion twice.

We're going to make a top level folder that will hold both of our apps

![](https://i.imgur.com/FbxjDNo.png)

## Create React App

1. `npx create-react-app holidays_front_end`
1. `cd holidays_front_end`
1. `npm start`

What we're building
![](https://i.imgur.com/Bil2WOm.png)




## Get Data from Our API

First, we'll need to store our data in the state of our App.

```js
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      holidays: []
    }
  }

  render() {
    return (
      <div className='container'>
       <h1>Holidays! Celebrate!</h1>
      </div>
    )
  }
}
```

We can use `fetch` to make database calls for us

```js

console.log('current base URL:', baseURL)

fetch(baseURL+ '/holidays')
  .then(data => {
    return data.json()},
    err => console.log(err))
  .then(parsedData => console.log(parsedData),
   err => console.log(err))
```


We will likely receive a CORS ERROR
![](https://i.imgur.com/qg8eEAp.png)

For safety reasons, requests with different origins are blocked by default.

We'll have to move over to our backend and add an npm package called `cors`

-`npm install cors`

- in **`server.js`**, with your other dependencies
```js
const cors = require('cors')
```
- further down, with your other middleware

Note: we only need localhost for this build, but to give you an example of how to limit CORS to a white list for your project (ie your localhost and then your api on heroku)

**server.js** (express backend)
```js
const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions)) // all routes are now exposed, sometimes you just want to limit access (ie OMDB - it's ok for anyone to see the movies, but you don't want just anyone updating the movies)
```


Now in your console you should be able to see your holiday coming back from your express backend api!



## Show A list of Holidays

Right now we're just calling this fetch on loading of this react app. But we're going to want to be able to call this functionality again and again.

Inside the class App, let's put this code inside a function, and bind `this`. We'll also set up state to hold our array of holidays

```js
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      holidays: []
    }
    this.getHolidays = this.getHolidays.bind(this)
  }

  getHolidays() {
    fetch(baseURL+ '/holidays')
      .then(data => {
        return data.json()},
        err => console.log(err))
      .then(parsedData => console.log(parsedData),
       err=> console.log(err))
  }

  render() {
    return (
      <div className='container'>
       <h1>Holidays! Celebrate!</h1>
      </div>
    )
  }
}
```

## When to call `getHolidays`

We want to call `getHolidays` when we render the app.
If we put it in the render function, we'll create an infinite loop. If we call it in the constructor it **might** be alright. Since JS is asynchronous sometimes that fetch request will complete at the right time, sometimes it won't.

We need a more surefire way to call this function at the right time. React has some `lifecycle` methods for exactly this purpose. We may want to run things when a component is mounted on the DOM, when a component is unmounted, when it is updated and more. We will use `componentDidMount` for our purpose

[lifecycle flow chart](https://levelup.gitconnected.com/componentdidmakesense-react-lifecycle-explanation-393dcb19e459)

```js
componentDidMount(){
  this.getHolidays()
}
```

We should still see our holiday(s) from our express API console logging.

Now we want to set that data in state

![](https://i.imgur.com/D4BBM6U.png)

Finally, we want to render it:

```js
<h1>Holidays! Celebrate!</h1>
<table>
  <tbody>
    { this.state.holidays.map(holiday => {
        return (
          <tr key={holiday._id} >
            <td> {holiday.name }</td>
          </tr>
        )
      })
    }
  </tbody>
</table>
```


Full Code:
**App.js**

```js
import React from 'react'
import './css/normalize.css'
import './css/skeleton.css'
import './css/index.css'
// import ballons from './images/two-balloon-icons-68911.png'
// import pencil from './images/simpleiconDOTcom-pen-15-64x64.png'
// import Show from './components/Show.js'
// import UpdateForm from './components/UpdateForm.js'
let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3004'
} else {
  baseURL = 'your heroku backend url here'
}

// baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
console.log('current base URL:', baseURL)



class App extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     holidays: []
   }
   this.getHolidays = this.getHolidays.bind(this)
 }
 componentDidMount(){
  this.getHolidays()
}
 getHolidays() {
   fetch(baseURL+ '/holidays')
     .then(data => {
       return data.json()},
       err => console.log(err))
     .then(parsedData => this.setState({holidays: parsedData}),
      err=> console.log(err))
 }
  render () {
   return (
     <div className='container'>
      <h1>Holidays! Celebrate!</h1>
      <table>
        <tbody>
          { this.state.holidays.map(holiday => {
              return (
                <tr>
                  <td key={holiday._id} > {holiday.name }</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
     </div>
   )
 }
}

export default App

```
