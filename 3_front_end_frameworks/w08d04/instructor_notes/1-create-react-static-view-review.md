# Review Create React App and Static Views

## Learning Objectives

- Review Create React App
- Review all the React we learned yesterday by rebuilding a new app

## Let's get started

Let's build a playlist maker called Tunr

[Create React Docs](https://github.com/facebook/create-react-app)

- cd into student_examples
- `npx create-react-app tunr_app`
- `cd tunr_app`
- `rm -rf .git` - because we are in the class repository - no git reps inside other git repos!
- open a new tab in terminal
- `npm start`
- in the other open tab `code .`

![](https://i.imgur.com/AlBJBso.png)

Let's look at our folders

![](https://i.imgur.com/ovMXd4n.png)

We will be working in the `src` folder. All the code in that folder will get compiled into the react app.

Code outside of the `src` folder will NOT be compiled into the react app. You can put more folders inside the `src` folder for organizational purposes.

The `public` folder is the actual html file that gets loaded into the browser. You can change the details in this file to match your app (app name, different favicon, update the manifest.json)

## Make This App Our Own

Let's remove all the create react app showcase stuff in `src/App.js` and rewrite the component into the same syntax we've been practicing.

We can also get a little fancy and use destructuring to pull out the `Component` object out of React:

![](https://i.imgur.com/KNtrHNd.png)

Our component, now should look familiar to yesterday. Check your browser - no errors is good.

In Chrome Dev tools Elements tab:

![](https://i.imgur.com/zLIKAkH.png)

We see some extra stuff like `noscript` - that is coming from `public/src/index.html`. You can customize this for your projects but you don't need to do anything for your labs and hw.

Remember, React uses `import` `export` portions of code. This is conceptually the same as `require()` and `module.exports()` we saw in our node apps in the previous units.

## Creating our Static App first

Here is our mockup

![](https://i.imgur.com/mjp850l.png)

- We have an `App` component and inside it we have a
- a header
- form component
- two playlist components
  - playlist components are made up of
    - a table with a header
    - table cells for each song
- a footer

We added a click event that allowed us to click on the h1 and change the h2 below it

- `mkdir src/components`
- `touch src/components/Footer.js`
- `touch src/components/Header.js`
- `touch src/components/Playlist.js`
- `touch src/components/Song.js`

- `touch src/data.js` (we'll add some 'data' a bit later)

- Copy the `copy_this.css` code in instructor notes and paste it in `index.css`

### Build out our components

**Footer.js**

```js
import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return <footer></footer>
  }
}

export default Footer
```

**Header.js**

```js
import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Tunr</h1>
      </header>
    )
  }
}

export default Header
```

##### Add a Form below the header

**App.js**

```js
<form>
  <label htmlFor="title">
    Song
    <input type="text" id="title" />
  </label>
  <label htmlFor="artist">
    Artist
    <input type="text" id="artist" />
  </label>
  <label htmlFor="time">
    Time
    <input type="text" id="time" />
  </label>
  <label>
    <input type="submit" />
  </label>
</form>
```

##### Add a Main tag that will hold one div for playlist info

**App.js**

```js
<main>
  <div>
    <h3>Playlist 1</h3>
    <table>
      <thead>
        <tr>
          <th>Song</th>
          <th>Arist</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Song</td>
          <td>Artist</td>
          <td>Time</td>
        </tr>
        <tr>
          <td>Song</td>
          <td>Artist</td>
          <td>Time</td>
        </tr>
        <tr>
          <td>Song</td>
          <td>Artist</td>
          <td>Time</td>
        </tr>
        <tr>
          <td>Song</td>
          <td>Artist</td>
          <td>Time</td>
        </tr>
      </tbody>
    </table>
  </div>
</main>
```

Our app should look like this:

![](https://i.imgur.com/ydz1AnP.png)

Hrrrmmm - this looks like a lot of code in one file... I wonder if we'll learn how to split up our code into smaller components soon...
