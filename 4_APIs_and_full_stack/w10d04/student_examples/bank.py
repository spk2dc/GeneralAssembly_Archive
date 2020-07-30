class Bank:
    allAccountsVal = 0
    def __init__(self, accountType="checking", balance=0):
        self.accountType = accountType
        self.balance = balance
        Bank.allAccountsVal += self.balance
    
    def deposit(self, num):
        self.balance += num

    def withdraw(self, num):
        self.balance -= num