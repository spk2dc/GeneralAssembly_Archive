# React Static Components

## About this Build

You have been showing off your portfolio and projects to your friends, family and classmates and they all say "It's fine. I like it!" But you want more insight.

So you decide to look into some analytical tools...but wow! They are expensive! You decide to make your own.

You visualize a dashboard with components for reviews, average rating, sentiment analysis and website visitors

![Dashboard Wireframe](https://i.imgur.com/5mCo2tV.png)

Try to recreate this wireframe with React. Be sure to create a few components (e.g. app, sidebar, reviews, average rating, sentiment analysis, website visitors).


## Get Started

### Set up
- `mkdir dashboard`
- `cd dashboard `
- `touch index.html`
- `code .`

### OR!!
- You can use `npx install-react-app dashboard`, `cd` into that directory, and run `npm start`. (Navigate back to the create react app notes for guidance)
- Just remember that it will be a large application and you may need to remove some styling and components to get started.

#### For those not using the npx install-react-app command
**index.html**
- add html boilerplate
- add script tags
- add a `div` tag inside (with an id of "main") the `body`

- in the head of your index page
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.3.2/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.2/umd/react-dom.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
```

- before the closing body tag
```html
<script type="text/babel"></script>
```

- render and `h1` tag using react to test it:
- Remember to place this code in the `script` tags that have a type of `text/babel`.
```jsx
class App extends React.Component {
  render() {
    return <h1>Hello world!</h1>
  }
}

ReactDOM.render(<App />, document.getElementById('main'))
```

#### If you want to run a simple server:
- If you want to use npm
    - Install, if you haven't already, with `npm install -g http-server` (might need to run `sudo npm install -g http-server`)
    - run `http-server -o`

#### Important Note
- To see updates you must refresh your browser, your server above may cache things, so you may have to do a hard refresh (hold shift key when doing a refresh) to see your changes. Remember `command shift r` as the hot keys


### Dark Theme!
Keep going! Add more details, add some css

![Cool Looking Dashboard](https://i.imgur.com/3kPnrAq.png)

Dashboard example found here: https://medium.muz.li/30-handpicked-excellent-dashboards-347e2407a057
