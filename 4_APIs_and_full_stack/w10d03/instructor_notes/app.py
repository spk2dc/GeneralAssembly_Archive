#PYTHON BASICS

#print is like console.log() in javascript
print('Hello World')

print(2 + 2)

#you don't need to use const, or let when declaring variable

my_name = 'deja'

#python uses the appropriately named, snake_case

print(my_name)

print('*' * 20)

#Control Flow and Operators

#Javacript has a number of logical, relational, and arithmetic Operators
#that look a little different in python, but they operate in basically the same way.

#Logical Operators
#in js we have &&, ||, !
#in python, these are used like this
# && = and
# || = or
# ! = not

#Relational Operators
#equals, in js we have '==' and we have '==='
#in python we just use '=='

# Arithmetic Operators
# +, -, *, /, % and we also have //

print(2 + 3)
print(2 * 3)
print(10 / 4)
print('this is 10 // 3')
print(10 // 3)
print('this is 10 % 3')
print(10 % 3)
print('*' * 20)


#DATA Types
#string, numbers, booleans etc.

#in python to find out what data type use the type() function

print(type(my_name))
print(type(4))
print(type(4.2))
print(type('4'))

#in python our booleans are capitalized
print(type(True))
print(type(False))

# in js we'd type
# 	if(big_num < 10){
		# console.log('less than ten')
# 	} else if(big_num > 10){
		# console.log('greater than ten')
# 	} else {
		# console.log('it's ten')
# 	}

big_num = 10

if big_num < 10:
    print('less than ten')
elif big_num > 10:
    print('greater than ten')
else:
    print("it's ten")


print('*' * 20)


print(type([]))

colors = ['red', 'green', 'blue']

print(colors)
print(colors[2])


#LOOPS

# for in loop

for i in range(1,21):

    print(i)

print('*' * 20)
print('*' * 20)

count = 0

while count < 5:
    print('this is the count')
    print(count)
    count += 1


print('*' * 20)

# function declaration

def make_triangles(num):
    for i in range(1, num):
        print('$' * i)
    for i in range(num, 1, -1):
        print('$' * i)

make_triangles(15)

print(" * " * 20)
print(" * " * 20)

# FIZZBUZZ
# list numbers up to 100
# if the number is divisible by 3 print fizz
# if the number is divisible by 5 print buzz
# if the number is divisible by 3 AND 5 print fizzbuzz

for i in range(1,101):
    if i % 3 == 0 and i % 5 == 0:
        print('fizzbuzz')
    elif i % 3 == 0:
        print('fizz')
    elif i % 5 == 0:
        print('buzz')
    else:
        print(i)

print(" * " * 20)

a_generic_name = 'jane doe'

print(a_generic_name)

#we can also slice
print(a_generic_name[0:4])


# remember in js, comparisons can look like this !==
# in python, its just like this !=

def is_it_twenty(num):
    if num != 20:
        print("that ain't twenty")
    else:
        print("yup, that's twenty")

is_it_twenty(15)
is_it_twenty(20)
