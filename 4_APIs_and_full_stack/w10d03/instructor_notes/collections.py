
# -- Lists --

# defining lists looks very similar to javascript
secret_files = ["TOP SECRET", "ALSO TOP SECRET", "DON'T EVEN LOOK AT THIS"]
print(secret_files[0])
print(secret_files[-1])
print(secret_files[0:2])

# this works too, but it's not common
# mylist = list()
# mylist2 = []
# print(mylist == mylist2)

# concatenate lists with the plus sign
new_secret_files = ["PRETTY DARN SECRET", "WE SEEM NOT TO BE TRUSTED QUITE AS MUCH WITH TOP SECRET", "MAYBE IT'S THAT WE LEAVE SECRETS IN ALL CAPS IN PLAIN TEXT"]
all_secret_files = secret_files + new_secret_files
print(all_secret_files)

# get the length of a list
print(len(all_secret_files))

# remove from the end of a list
all_secret_files.pop()
print(all_secret_files)

# add to the end of a list
all_secret_files.append('TOP TOP SECRET')
print(all_secret_files)

# add anywhere in a list
all_secret_files.insert(0, 'KINDA SECRET')
print('after insert:', all_secret_files)

# remove from anywhere in a list
all_secret_files.pop(5)
print(all_secret_files)

# remove a specific item from the list
all_secret_files.remove('TOP SECRET')
print(all_secret_files)

# we don't have all the same methods as strings! this won't work:
# all_secret_files.replace('ALSO TOP SECRET', 'THE MOST SECRET')
# print(all_secret_files)
# but this will:
i = all_secret_files.index('ALSO TOP SECRET')
all_secret_files[i] = 'THE MOST SECRET'
print(all_secret_files)

# you can loop through a list using indices
for i in range(0, len(all_secret_files)):
    print(all_secret_files[i])

# or, loop directly through the list items (like a javascript for-of loop)
print('looping through:', all_secret_files)
for secret_file in all_secret_files:
    print(secret_file)


# -- Dictionaries --

instructor = {
    'name': 'James',
    'course': 'SEI',
}
print(instructor)

# mydict = dict()
# mydict2 = {}
# print(mydict == mydict2)

# have to use bracket notation to get values out of a dictionary
print('My name is ' + instructor['name'])

# you can use numbers as keys:
my_special_key = 'key3'
my_data = {
    'string': 'data 1',
    42: 'data 2',
    my_special_key: 'data 3',
}
print(my_data)
print(my_data[my_special_key])

# check if a key exists in a dictionary
if 'current_week' in instructor:
    print(instructor['current_week'])

# add key-value pairs, or update values at any time
print(instructor)
instructor['current_week'] = 10
print(instructor)
instructor['current_week'] = 11
print(instructor)

# remove keys
del instructor['current_week']
print(instructor)

# the "length" of a dictionary is the number of keys it has
print(len(instructor))

# commonly you loop through a dictionary's key-value pairs like this:
for key, value in instructor.items():
    print(key, value)


# -- BONUS: Tuples --

# tuples are almost exactly like lists, except they can't be modified
my_tuple = (1, 2, 4, 8, 'a', 'bc')
print(my_tuple[0])
print(my_tuple[-1])
# this won't work, because it's trying to modify the tuple
# my_tuple[0] = 10


# -- BONUS: Behind the scenes in for loops --

# looping through a range of numbers is kind of like looping through a list of those numbers:
for i in range(0, 5):
    print(i)
# is like:
print(list(range(0, 5)))
for i in [0, 1, 2, 3, 4]:
    print(i)

# similarly, instructor.items() just returns some tuples that you can iterate through:
print(instructor)
print(list(instructor.items()))
