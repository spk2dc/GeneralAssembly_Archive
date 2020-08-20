class Node{
    constructor(data){
        // a Node starts with a given data property
        this.data = data;
        // a Node also has a .next property initialized as null
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        // a Linked List starts with a "head" property initialized as null
        this.head = null;
    }
    appendNode(data){
        // creates a new node with the given data and adds it to back of the list
        const newNode = new Node(data);
        if(!this.head){
          this.head = newNode;
        } else {
          let walker = this.head;

          while(walker.next){
            walker = walker.next;
          }
          walker.next = newNode;
        }
    }
    prependNode(data){
        // creates a new node with the given data and adds it to the front of the list
        const newNode = new Node(data);
        const oldHead = this.head;
        this.head = newNode;
        newNode.next = oldHead;
    }
    size(){
      let count = 0;
      let node = this.head;
      while(node){
        count++;
        node = node.next;
      }
      return count;
    }
    pop(){
        // removes the last node from the list and returns it
        if(!this.head){
          return null;
        } else if(!this.head.next){
          const oldHead = this.head;
          this.head = null;
          return oldHead;
        } else {
          let walker = this.head;
          while(walker.next.next){
            walker = walker.next;
          }
          const result = walker.next;
          walker.next = null;
          return result;
        }
    }
    removeFromFront(){
        // remove the head node from the list and return it
        // the next node in the list is the new head node
        if(!this.head){
          return null;
        }
        const oldHead = this.head;
        this.head = this.head.next;
        oldHead.next = null;
        return oldHead;
    }
    search(data){
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false
        if(!this.head){
          return false;
        }
        let walker = this.head;
        let index = 0;
        while(walker.next){
          if(walker.data === data){
            return index;
          } else {
            index++;
            walker = walker.next;
          }
        }
       return walker.data === data ? index : false
    }
}

//code here for node
// let node = new Node(5);
// console.log(node.data)
// console.log(node.next == null)

//LinkedList
// let list = new LinkedList();
// console.log(list.head == null)

//appendNode
// list.appendNode(1);
// list.appendNode(2);
// console.log(list.head.data == 1)
// console.log(list.head.next.data == 2)

//prependNode
// let list = new LinkedList();
// list.appendNode(2);
// console.log(list.head.data == 2)
// list.prependNode(1);
// console.log(list.head.data == 1)
// console.log(list.head.next.data == 2)

//size()
// let list = new LinkedList();
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(3);
// list.appendNode(4);
// console.log(list.size());

//pop
// let list = new LinkedList();
// list.appendNode(1);
// list.appendNode(2);
// let removedNode = list.pop();
// console.log(removedNode.data);

//removeFromFront
// let list = new LinkedList();
// list.appendNode(1);
// list.appendNode(2);
// let removedNode = list.removeFromFront();
// console.log(removedNode.data);

//search
// let list = new LinkedList();
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(3);
// list.appendNode(4);
// let foundNode = list.search(3);
// console.log(foundNode);
// let unFoundNode = list.search(55);
// console.log(unFoundNode);
