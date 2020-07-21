[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Sunny Philadelphia Animal Shelter Pt. 2

![](https://i.investopedia.com/content/short_article/3_reasons_why_pet_st/shutterstock_124152457_pet_stocks.jpg)

The Sunny Philadelphia Animal Shelter has been looking for volunteers to set up their website, so you offered your help because what better way to add onto your resume and use your newly aquired knowledge for web development? Let's get started, there are animals that need to be adopted! We'll be continuing from the app we started during yesterday's labs.

#### Learning Objectives

- Full CRUD app with React frontend

#### Prerequisites

- JavaScript
- Node / Express
- ReactJS

---

## Getting Started

1. Continue to work in the `sunny_shelter` directory from yesterday's labs

## Consuming the API with React - Edit & Delete

Now that we can create and read from our Express API using React, let's also try to get our update and delete routes working with React too!

### Guide

1. Add a button onto each animal that reads "Pending Adoption"
1. Make it so that when a user clicks the button, it will toggle between the animal's status of adopted/not adopted (recall that in our schema we added a boolean value for 'adopted')
1. Add another button onto each animal that reads "Officially Adopted"
1. Make it so that when a user clicks that button, it will remove the animal from the database and the page, since they've now gone to a loving home!
1. Make it so that you can edit an animal's details

## Adding Authorization with React 	
 Cool, we have a fully functional animal shelter website going! But it allows anyone visiting the site to create or edit an animal, which is not what Sunny Philadelphia wants. So, let's get started with adding some authorization
 ### Guide 	
 1. Create a User model with `username` and `password` 	
1. Don't forget to encrypt the password with `bcrypt` 	
1. Create a User router controller with a route to `post` a new user 	
1. Create a Sessions router controller with a route to `post` a new session and `delete` a session
1. Now let's start connecting it with the front-end
1. In your `index.html`, add another form, this time to create a new user 	
1. Connect the form to your angular app controller so that when you submit it, it'll make an AJAX request to our API and create the new user
1. Now that we have users, create the ability to log in! (hint: you'll need another form, and another method in your angular app controller)
1. Once you have sessions working, upgrade your app so that only logged in users can add/edit animals and officially declare pets as adopted
 ## Stretch Goals 	
 1. If you didn't complete any of [yesterday's](/unit_3/w08d01/student_labs/README.md) stretch goals, go back and do those!
1. Keep upgrading the animal shelter app 	
    - Make it so that there are different types of users, for example an admin user and a customer user 	
      - Make it so that only the admin users can add/edit/declare animals officially adopted
      - Make it so that only logged in users can "pend" an animal for adoption 	
      - _Super Stretch:_ Make it so that if one user pends an animal, no other customer user can "unpend" the animal -- only that specific user (and admins)    	
