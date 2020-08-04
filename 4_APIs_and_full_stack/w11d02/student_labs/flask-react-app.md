# Flask / React App

- This will be a concurrent app that you build along with the lessons throughout the week.

### Day Two

##### Requirements

1. Create a form that that is pre-filled and will make a put request to update a dog resource
1. Have your react app submit a delete request to your flask app from an "onclick" event that will send the ID of the resource you want deleted on the flask app

<details>
  <summary>Click for hints - Delete</summary>

  * Create a Delete button next to each dog in your list. Make it so that it logs the ID of the dog whose delete button the user clicked by calling a method passed down through props and attached to the button.  You don't necessarily need forms here, but there are a couple of different patterns for getting that ID into the delete method.  Commit when you see the ID in the console.
  * Make your `deleteDog` function actually make a request to delete the dog on your server. Commit when it works.
</details>

<details>
  <summary>Click for hints - Update</summary>

  * Add an Edit button next to each dog in your list. Make it so that it logs the ID of the dog whose edit button the user is clicking by calling a method (`editDog`) passed down through props and attached to the button.  Commit when you see the ID in the console.
  * Have a value in state of `DogContainer` called `idOfDogToEdit` initialized to -1.  Later, this will represent a dog currently being edited, and be used to conditionally hide and show an edit form, but for now just have your editDog button set the value of `this.state.idOfDogToEdit` using setState.  Test by logging and/or using React Dev tools, and commit when it works.
  * Create a `DogEditForm` component that renders in `DogContainer` when the value of `this.state.idOfDogToEdit` is something other than `-1`. Commit when you have it so that clicking any edit button makes the form show.
  * Have another property in state called `dogCurrentlyBeingEdited` initialized to `null`.  Make `editDog` also copy the properties of the dog currently being edited into a new object stored there in state.  Test by logging and/or using React Dev tools, and commit when it works.
  * Pass those values down into `DogEditForm` via props so they actually show up in the form. Commit when it works.
  * Write a `handleEditChange` function in `DogContainer` that will be passed to `DogEditForm` through props and added as an onChange handler to the inputs in the edit form. That function should update the appropriate property in `dogCurrentlyBeingEdited`, which should mean that the user can type into the edit form.  Commit when youhave verified that the values in state are actually being updated when the user types.
  * Create a function `updateDog` in `DogContainer`.  Commit after each of the following:
    * `updateDog` passed into `DogEditForm` via props and logs "updateDog" when update is clicked
    * `updateDog` actually sends an AJAX request to update the dog on your server (should be reflected on the screen)
    * `updateDog` closes the editModal
    * `updateDog` resets other edit-related state properties to their initial values
</details>
