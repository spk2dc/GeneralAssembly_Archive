print ('hello')

test = 'testing'

print (test)

print('*'*20) 

print(type([]))

colors=['blue','red']

print(colors)

print('*'*20) 
limit = 100
for i in range(0,limit+1,1):
    if i % 3==0:
        print('fizz',end='')
    if i % 5==0:
        print('buzz',end='')
    if i % 3!=0 and i % 5!=0:
        print(i,end='')
    print()