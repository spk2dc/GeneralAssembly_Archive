# Exercise 1

# print(students[1])
# print(students[-1])

# Exercise 2
# for food in foods:
#   print(food, "is a good food.")

# Exercise 3
# for food in foods[-2:len(foods)]:
#   print(food, "is a good food.")

# Exercise 4
home_town = {
  "city": "Peachtree City",
  "state": "Georgia",
  "population": 34452
}

# print("I was born in", home_town["city"], ",", home_town["state"], "- populations of", home_town["population"])

# Exercise 5
# for key, value in home_town.items():
#   print("{} = {}".format(value, key))

# Exercise 6
students = ["Mac", "Dennis", "Dee", "Frank", "Charlie"]


cohort = []

# for i in range(len(students)):
#   this_student_dict = {
#     "student": students[i],
#     "fav_food": foods[i]
#   }

#   cohort.append(this_student_dict)

#   print(cohort)

# for student in cohort:
#   print(student)

# Exercise 7
# awesome_students = [ student + " is awesome" for student in students ]

# print(awesome_students)

# for i in awesome_students:
#   print(i)

# Exercise 8
# foods = ("protein shake", "fries", "salad", "beer", "milk steak")

# food_with_a = [ food for food in foods if "a" in food ]

# print(food_with_a)