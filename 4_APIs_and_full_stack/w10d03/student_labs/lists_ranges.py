# exercise 1
students = ['name1','name2','name3','name4']
print(students[0])
print(students[-1])

# exercise 2
foods = ('food1','food2','food3','food4')
for i in foods:
    print(f'{i} is good')

# exercise 3
for i in foods[-2:]:
    print(f'{i} is good')

# exercise 4
home_town = {
    'city': 'city1',
    'state': 'state1',
    'population': 100
}
print(f"I was born in {home_town['city']}, {home_town['state']} - population of {home_town['population']}")