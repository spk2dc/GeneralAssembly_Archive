![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Linked Lists

Linked lists are a foundational data structure that many other, more complex structures use as their basis.

There are two components to this lesson:
1. myGA module: [Linked Lists](https://my.generalassemb.ly/activities/397)
2. [In-Class Exercise Walkthrough: Implementing a Linked List](instructor_examples/LinkedList.js)

> The myGA module contains a link to an exercise in CodePen. **The code in CodePen is the exact same as the code in the in-class exercises.** Try out the exercise in CodePen and see how far you can get with it. Leave off where you get stuck and we'll review the solution in class.

## Learning Objectives
By the end of this lesson, you'll be able to:
- Define a linked list.
- Explain how a node stores data.
- Identify situations where you use a linked list instead of an array.
- Build a singly linked list.

## Prerequisites
* Big O Notation

## What is a linked list?
picture here instead 



## A Bit of History
Preserving memory was very important on older computers where memory was scarce. At that time, a built-in array in C required you to specify how many items the array could contain and the program would reserve that amount of memory. Reserving that memory meant it could not be used for the rest of the program or any other programs running at the same time, even if the memory was never filled. One memory-scarce machines, you could easily run out of available memory using arrays. Linked lists were created to work around this problem.

Though originally intended for better memory management, linked lists also became popular when developers didn’t know how many items an array would ultimately contain. It was much easier to use a linked list and add values as necessary than it was to accurately guess the maximum number of values an array might contain. As such, linked lists are often used as the foundation for built-in data structures in various programming languages.

The built-in JavaScript Array type is not implemented as a linked list, though its size is dynamic and is always the best option to start with. You might go your entire career without needing to use a linked list in JavaScript but linked lists are still a good way to learn about creating your own data structures.

## Strengths
- Fast operations on the ends. Adding elements at either end of a linked list is O(1). Removing the first element is also O(1).
- Flexible size. There's no need to specify how many elements you're going to store ahead of time. You can keep adding elements as long as there's enough space on the machine.

## Weaknesses
- Lookups are Costly. To access or edit an item in a linked list, you have to take O(n) time to walk from the head of the list to the nth item.


## Additional Resources
- The top 20 [linked list interview questions](https://www.geeksforgeeks.org/top-20-linked-list-interview-question/) (that's a LOT!).
- Visualize [building a linked list](https://visualgo.net/bn/list).
- Learn more about [doubly linked lists](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/doubly-linked-list) (we only cover a singly linked list in the exercise).


#### Sources
interviewcake.com
humanwhocodes.com
