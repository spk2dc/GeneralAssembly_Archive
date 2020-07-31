# Python Function Challenges

Now it's time to practice some of these Python skills. Below are four challenges meant to tie together all the concepts that we've learned so far. You may have solved similar problems using JavaScript. That's great! Use that knowledge to apply the same abstract concepts but update the syntax to make it work for Python.

## Challenges

1. Write a function named `sum_to()` that takes a number parameter `n` and returns the sum of the numbers from 1 to n. For example:

```python
sum_to(6)  # returns 21
sum_to(10) # returns 55
```

2. Write a function named `largest()` that takes a list parameter and returns the largest element in that list. You can assume the list contents are all *positive* numbers. For example:

```python
largest([10, 4, 2, 231, 91, 54])  # returns 231
largest([1,2,3,4,0])  # returns 4
```

3. Write a function named `occurences()` that takes two string parameters and counts the number of occurrences of the second string inside the first string. For example:

```python
occurences('fleep floop', 'e')   # returns 2
occurences('fleep floop', 'p')   # returns 2
occurences('fleep floop', 'ee')  # returns 1
occurences('fleep floop', 'fe')  # returns 0
occurences('mississippi', 'ss')  # returns 2
```

4. Write a function named `product()` that takes an **arbitrary** number of parameters, multiplies them all together, and returns the product. To do this you might have to google `*args`!


## Hungry for More?  

Whether its python or JavaScript, you should be building your raw algorithmic problem-solving muscles!  Send a group message to Ben, James, John and Deja and we will send you extra functions to write.  Avoid using Google—solve them by pseudocoding and just thinking through stuff until you get a solution, _then_ Google it.  


## Solutions (do not peek unless you are stuck or finished)

<details>
  <summary><strong>Challenge 1</strong></summary>

  ```python
  def sum_to(num):
    sum = 0
    for i in range(num + 1):
      sum += i
    return sum
  ```
</details>

<details>
  <summary><strong>Challenge 2</strong></summary>

  ```python
  def largest(ls):
    largest = 0
    for num in ls:
      if num > largest:
        largest = num
    return largest
  ```
</details>

<details>
  <summary><strong>Challenge 3</strong></summary>

  ```python
  def occurances(string, substr):
    mismatch = False
    count = 0
    # Check to see if the substr exists in the string at all
    if substr in string:
      # If it does, start looking through the string
      for i in range( len(string) ):
        # If the string character matches the first char in substr...
        if string[i] == substr[0]:
          # Loop through substr to see if the rest of the chars match
          for j in range( len(substr) ):
            if substr[j] != string[i + j]:
              # If they ever don't match along rhe lengtrh of the substr, then mark a mismatch
              mismatch = True
              break;
          # If there were no mismatches, we can up the occurance count by 1
          if not mismatch:
            count += 1
    # Finally return the count
    return count
  ```
</details>

<details>
  <summary><strong>Challenge 4</strong></summary>

  ```python
  def product(*args):
    product = 1
    for arg in args:
      product *= arg
    return product
  ```
</details>
