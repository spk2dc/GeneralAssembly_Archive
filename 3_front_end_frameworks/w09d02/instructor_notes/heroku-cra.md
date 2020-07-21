# Heroku Deployment of Create React App

Note all the Heroku-specific instructions from the
[unit 2 heroku lesson](https://git.generalassemb.ly/seir-5-26/student-resources/blob/master/2_full_stack_dev/w07d02/instructor_notes/heroku.md).

Add `engines`:

 - check your version of node
 - check your version of npm
 - add both of them to your package.json files

```js
"engines": {
  "node": "10.11.0",
  "npm": "6.4.1"
},
```

Attach mongolab through the Heroku dashboard and make sure you're using `process.env.MONGODB_URI` and `process.env.PORT` in your Express server.


## Two deployed projects

The simplest way to deploy your full-stack application may be as two separate Heroku projects, one for the API and one for React.

For your React project, it is important to change heroku build packs:
https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack

```
heroku buildpacks:set https://github.com/mars/create-react-app-buildpack.git
git commit --allow-empty -m 'Deploy with only create-react-app-buildpack'
git push heroku master

```

This solution is ok for going between localhost and heroku (assuming your React app that is hosted on Heroku should be consuming your Express API that is also on Heroku):

```js
let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3004';
} else {
  // "https://fathomless-sierra-68956.herokuapp.com" in this case is the *API* url
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com';
}

console.log('current base URL:', baseURL)
```

Don't forget to accept requests from your React app in your API server:

```js
// "https://protected-stream-14948.herokuapp.com" in this case is the *React app* url
const allowedURLs = ['http://localhost:3000', 'https://protected-stream-14948.herokuapp.com'];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedURLs.indexOf(origin) >= 0) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));
```


## One project with proxy

If you're willing to do some research, you can try deploying one project with both your React app and Express API. You can use "concurrently" to run multiple node servers at once:

https://www.npmjs.com/package/concurrently

and you can set a proxy in your package.json to get around CORS issues:

https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development


## Custom environment variables

You can add custom variables with create react app. You need to start them with `process.env.REACT_APP_` (store the variables in a `.env` file - make sure that file s in the `.gitignore`

This works great locally. However on heroku it doesn’t seem to work even if you try to add it as an environmental variable (as of spring 2019)

Under settings:
![heroku](https://i.imgur.com/3fAKuYd.png)

This does not seem to work on heroku
