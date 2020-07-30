class Bank:
    allAccountsVal = 0
    def __init__(self, accountType="checking", balance=0):
        self.accountType = accountType
        self.balance = balance
        Bank.allAccountsVal += self.balance
        print(f"Account {self.accountType} created with {self.balance} balance")
    
    def deposit(self, num):
        self.balance += num
        Bank.allAccountsVal += num
        print(f'New balance: {myBank.balance}')

    def withdraw(self, num):
        self.balance -= num
        Bank.allAccountsVal -= num
        print(f'New balance: {myBank.balance}')
    
    def printAllAccountsVal(self):
        print(f'Total balance: {Bank.allAccountsVal}')


myBank = Bank()
myBank.deposit(10)
myBank.printAllAccountsVal()

myBank2 = Bank('savings',200)
myBank2.withdraw(50)
myBank.printAllAccountsVal()
