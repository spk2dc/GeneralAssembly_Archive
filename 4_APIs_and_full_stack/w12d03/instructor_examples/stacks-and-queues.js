// array implementation of a stack

// class Stack {
//   constructor() {
//     this.items = []
//   }

//   push(item){
//     this.items.push(item)
//   }

//   pop(){
//     return this.items.pop()
//   }

//   peek(){
//     return this.items[this.items.length - 1]
//   }

//   isEmpty(){
//     return this.items.length === 0
//   }
// }

// array implementation of a queue

// class Queue {
//   constructor() {
//       this.items = []
//   }

//   enqueue(data) {
//       this.items.push(data)
//   }

//   dequeue() {
//       return this.items.shift()
//   }

//   peek() {
//       return isEmpty() ? 'empty list!' : this.items[0]
//   }

//   isEmpty(){
//       return this.items.length === 0
//   }
// }







// linked list implementation of a stack
// class Node {
//   constructor (data, next = null) {
//       this.data = data
//       this.next = next
//   }
// }

// class Stack {
//   constructor () {
//       this.head = null
//   }

//   push (data) {
//       this.head = new Node(data, this.head)
//   }

//   pop () {
//       let data = this.head.data
//       this.head = this.head.next
//       return data
//   }

//   peek () {
//       return this.head.data
//   }

//   isEmpty(){
//       return this.head == null
//   }
// }


// linked list implementation of a queue
// class Node {
//   constructor (data, next = null, prev = null) {
//       this.data = data
//       this.next = next
//       this.prev = prev
//   }
// }

// class Queue {
//   constructor() {
//       this.head = null
//       this.tail = null
//   }

//   enqueue(data) {
//       let newNode = new Node (data, null, this.head)

//       if (!this.head) {
//           this.head = newNode
//       } else {
//           this.tail.next = newNode
//           newNode.prev = this.tail
//       }

//       this.tail = newNode
//   }

//   dequeue() {
//       let data = this.head.data
//       this.head = this.head.next
//       return data
//   }

//   peek() {
//       return isEmpty() ? 'empty list!' : this.head.data
//   }

//   isEmpty() {
//       return this.head == null
//   }
// }



// The first is a priority queue. This has three rules in addition to those of a typical queue:

// 1. Every item has a priority associated with it.
// 2. An element with high priority is dequeued before an element with low priority.
// 3. If two elements have the same priority, they are served according to their order in the queue.


// Double ended queue

// A double-ended queue (“deque,” for short) is a queue that performs insertions and deletions at both ends. 
// It’s typically implemented with a doubly linked list or a dynamic array. 
// These are often used for task-scheduling algorithms.

// In computer science, this might be comparable to spreading tasks between several different servers as equally as possible. 
// Each of these server machines maintains a double-ended queue of tasks that they need to crunch through. 
// Mostly, this deque just functions as a regular queue, adding tasks to the end and processing them in the order they were received (FIFO). 
// However, if one of your servers has no tasks in its own queue, it can take from the end of another server’s queue. 
// They help each other out!


