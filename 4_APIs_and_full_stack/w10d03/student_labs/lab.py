
def sum_to(num):
    if num == 0:
        return 0
    return num + sum_to(num-1)

print('sum_to')
print(sum_to(6))  # returns 21
print(sum_to(10)) # returns 55


def largest(nums):
    largest = nums[0]
    for i in nums:
        if i > largest:
            largest = i
    return largest

print('largest: ')
print(largest([10, 4, 2, 231, 91, 54]))  # returns 231
print(largest([1,2,3,4,0]))  # returns 4


def occurencesOneChar(main_str,sub_str):
    num = 0
    for i in main_str:
        if i == sub_str:
            num += 1
    return num

def occurencesFullSubstr(main_str,sub_str):
    num = 0
    tempIndex = 0
    for i in main_str:
        if i == sub_str[tempIndex]:
            tempIndex += 1
        else:
            tempIndex = 0

        if tempIndex == len(sub_str):
            num += 1
            tempIndex = 0
        # print(f"i: {i}, temp: {tempIndex}, num {num}")

    return num

print('occurencesOneChar: ')
print(occurencesOneChar('fleep floop', 'e'))   # returns 2
print(occurencesOneChar('fleep floop', 'p'))   # returns 2
print(occurencesOneChar('fleep floop', 'ee'))  # returns 1
print(occurencesOneChar('fleep floop', 'fe'))  # returns 0
print(occurencesOneChar('mississippi', 'ss'))  # returns 2

print('occurencesFullSubstr: ')
print(occurencesFullSubstr('fleep floop', 'e'))   # returns 2
print(occurencesFullSubstr('fleep floop', 'p'))   # returns 2
print(occurencesFullSubstr('fleep floop', 'ee'))  # returns 1
print(occurencesFullSubstr('fleep floop', 'fe'))  # returns 0
print(occurencesFullSubstr('mississippi', 'ss'))  # returns 2


def product(*nums):
    product = nums[0]
    for i in nums[1:]:
        product *= i
    return product

print('product: ')
print(product(3,2,4))   # returns 24
print(product(1,2,4))   # returns 24