# Flask / React App

- This will be a concurrent app that you build along with the lessons throughout the week.


### Day One

##### Requirements

1. Set up a new react app with create-react-app
1. Have your react app fetch the data from the "index" route in your flask app that you created, and render the data out in a list
1. Have your react app submit a form that makes a post request to your flask app that will create your resource

<details>
  <summary>Click for hints - Setup</summary>

  * Create a component called `DogContainer`.
  * It will have a `dogs` array in state. A `Dog` is an object with name (string), age (number), and breed (string).
  * Render `DogContainer` in `App`
</details>

<details>
  <summary>Click for hints - Read</summary>

  * Create a `DogList` component that renders inside of `DogContainer`.
  * Once you have it showing up, make an AJAX request to your flask server to populate your dogs state.
  * Pass the dogs to DogList from state and make it render the list of dogs in some kind of nice way.
  * When it works, commit!
</details>

<details>
  <summary>Click for hints - Create</summary>

  * Create a `DogNewForm` class component that lets users enter dog info. Verify that the inputs are controlled by logging state in `render()`.  Test it, and when you know it works, commit.
  * Make a `handleSubmit` function in `DogNewForm` that just logs `"handleSubmit in DogNewForm called"` and have it called when the form is submitted.  You should see that log in the console--don't forget to `preventDefault()`.  When it works, commit.
  * In `DogContainer`, make a function `addDog()` that just logs "addDog" and pass it through props to `DogNewForm`. Make it so that clicking submit on dog form causes "addDog" to log.  When it works, commit.
  * Make `addDog` actually make an AJAX request to create a new Dog on your server. Refresh the dog list to show the newly added data.
  * When it works, commit.
</details>
