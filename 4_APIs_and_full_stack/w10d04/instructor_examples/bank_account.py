class BankAccount:
    total_balance = 0

    def __init__(self, account_type):
        self.account_type = account_type
        self.balance = 0
        self.overdraft_fees = 0

    def deposit(self, amount):
        self.balance += amount
        BankAccount.total_balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            self.overdraft_fees += 20
        self.balance -= amount
        BankAccount.total_balance -= amount


class ChildBankAccount(BankAccount):
    def withdraw(self, amount):
        if amount > self.balance:
            print('Insufficient funds available')
        else:
            self.balance -= amount
            BankAccount.total_balance -= amount


my_account = BankAccount('checking')
my_account.deposit(30)
my_account.withdraw(10)
my_account.withdraw(50)
print('my account type:', my_account.account_type)
print('my account balance:', my_account.balance)
print("my account's overdraft fees:", my_account.overdraft_fees)

child_account = ChildBankAccount('savings')
child_account.deposit(30)
child_account.withdraw(10)
child_account.withdraw(50)
print('child account type:', child_account.account_type)
print('child account balance:', child_account.balance)
print("child account's overdraft fees:", child_account.overdraft_fees)

print('total balance of all accounts:', BankAccount.total_balance)
