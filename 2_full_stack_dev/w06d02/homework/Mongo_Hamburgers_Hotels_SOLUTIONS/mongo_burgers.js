// create 5 burgers (at least 3 should be beef)
// https://docs.mongodb.com/manual/reference/method/db.collection.insert/#db.collection.insert
db.burger.insert(
  {
    meat: 'beef',
    cheese: false,
    toppings: ['ketchup' ,'onions' ,'pickles']
  }
)


db.burger.insert(
  {
    meat: 'beef',
    cheese: true,
    toppings: ['maple syrup' ,'deep fried waffle bits' ,'hot fudge']
  }
)

db.burger.insert(
  {
    meat: 'beef',
    cheese: true,
    toppings: ['fried banana' ,'peanut butter' ,'jelly']
  }
)

db.burger.insert(
  {
    meat: 'beef',
    cheese: false,
    toppings: ['ramen' ,'olives' ,'french fries']
  }
)

db.burger.insert(
  {
    meat: 'tofu',
    cheese: false,
  }
)

db.burger.insert(
  {
    meat: 'turkey',
    cheese: false,
    toppings: ['sriracha' ,'pickles' ,'kimchi' , 'pickled beets']
  }
)

// find all the burgers
// https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find
db.burger.find()

// show just the meat of each burger
// https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find
db.burger.find({}, {meat: 1, _id: 0})

// show just the toppings of each burger
// https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find
db.burger.find({}, {toppings: 1, _id:0})

// show everything but the cheese
// https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find
db.burger.find({}, {cheese: 0})

// find all the burgers with beef
// https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find
db.burger.find({meat:'beef'})

// find all the burgers that are not beef
// https://docs.mongodb.com/manual/reference/operator/query/ne/#op._S_ne
db.burger.find({meat:{$ne:'beef'}})

// find the first burger with cheese
// https://docs.mongodb.com/manual/reference/method/db.collection.findOne/#db.collection.findOne
db.burger.findOne({cheese: true})

// find one and update the first burger with cheese to have a property of 'double cheese'
// https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/#db.collection.findOneAndUpdate
db.burger.findOneAndUpdate({cheese: true}, {$set:{cheese: 'double cheese'}})

// find the burger you updated to have double cheese
// https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find
db.burger.find({cheese: 'double cheese'})

// find and update all the beef burgers to be 'veggie'
// update: https://docs.mongodb.com/manual/reference/method/db.collection.update/#db.collection.update
// $set: https://docs.mongodb.com/manual/reference/operator/update/set/#up._S_set
db.burger.update({meat:'beef'}, {$set:{meat:'veggie'}}, {multi: true})

// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burger.findAndModify({query: {meat: 'veggie'}, remove: true})
// OR, removes ONE
db.burger.remove({meat: 'veggie'}, {justOne: true})

// drop the collection
// https://docs.mongodb.com/manual/reference/method/db.collection.drop/#db.collection.drop
db.burger.drop()
//Expected Output
//true

// drop the database
// https://docs.mongodb.com/manual/reference/method/db.dropDatabase/#db.dropDatabase
db.dropDatabase()
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
