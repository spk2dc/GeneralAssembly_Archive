class Word():
    # this method will split the word up into a list of dictionaries with 2 attributes: 
    # the letter/character, and a boolean representing whether or not it has been guessed
    def __init__(self, chosen_word):
        self.char_list = [ {'char':char, 'guessed':False} for char in chosen_word ]
    
    def debugging_print(self):
        for i in self.char_list:
            print(i)

# some variables here to prepare the wordlist, initialize things like 
# `remaining_guesses` (start a round with 8), `letters_used`, the `chosen_word` (randomly 
# chosen from a list of words you also declare here perhaps?), 
#and whatever else you might want to keep track of
chosen_word = Word('test')
remaining_guesses = 8
letters_used = []

# a loop here that will cause game to play and be exited when user either wins or loses
# see below for tips on how to structure this loop
while remaining_guesses > 0:
    print(f'You have {remaining_guesses} guesses left')
    remaining_guesses -= 1

chosen_word.debugging_print()