userName = input('What is your name? ')
print('The user said:', userName)

userAnswer = input('Do you want to continue [y/N]? ')
if userAnswer == 'y':
    print('Apparently ' + userName + ' wants to continue!')
else:
    print(userName + ' is done with this program')
