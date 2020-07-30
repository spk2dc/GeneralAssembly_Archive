class Word():
    # this method will split the word up into a list of dictionaries with 2 attributes: 
    # the letter/character, and a boolean representing whether or not it has been guessed
    def __init__(self, chosen_word):
        self.char_list = [ {'char':char, 'guessed':False} for char in chosen_word ]
        self.guessed_string = ''
    
    def check_guessed(self, userInp):
        self.guessed_string = ''
        userInpExists = False
        allGuessed = True

        for elem in self.char_list:
            if elem['char'] == userInp:
                userInpExists = True
                elem['guessed'] = True
            
            if elem['guessed']:
                self.guessed_string += elem['char']+' '
            else:
                self.guessed_string += '_ '
                allGuessed = False
        
        return userInpExists

    def debugging_print(self):
        for i in self.char_list:
            print(i)

# some variables here to prepare the wordlist, initialize things like 
# `remaining_guesses` (start a round with 8), `letters_used`, the `chosen_word` (randomly 
# chosen from a list of words you also declare here perhaps?), 
#and whatever else you might want to keep track of


# a loop here that will cause game to play and be exited when user either wins or loses
# see below for tips on how to structure this loop
def game_loop():
    global remaining_guesses
    while remaining_guesses > 0:
        userInp = input('Enter a letter: ')
        userInpExists = False
        remaining_guesses -= 1

        userInpExists = chosen_word.check_guessed(userInp)

        if userInpExists:
            print(f'"{userInp}" is correct! {remaining_guesses} guesses left')
        else:
            print(f'Sorry "{userInp}" is incorrect. {remaining_guesses} guesses left')

        print('\n',chosen_word.guessed_string)
        if '_' not in chosen_word.guessed_string:
            print(f'\nCONGRATS! You won with {remaining_guesses} guesses left\n')
            return
    
    print(f'\nLOST. Word was "{wordInp}"\n')


wordInp = 'test'
chosen_word = Word(wordInp)
remaining_guesses = 8

print('\nWelcome to snowman word guessing game! \n')
print(f'Your word is {len(wordInp)} characters long. You have {remaining_guesses} guesses')

game_loop()