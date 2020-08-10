class Node{
    constructor(){
        // a Node starts with a given data property
        // a Node also has a .next property initialized as null
    }
}

class LinkedList{
    constructor(){
        // a Linked List starts with a "head" property intialized as null
    }
    appendNode(data){
        // creates a new node with the given data and adds it to back of the list
    }
    prependNode(data){
        // creates a new node with the given data and adds it to the front of the list
    }
    size(){

    }
    pop(){
        // removes the last node from the list and returns it
    }
    removeFromFront(){
        // remove the head node from the list and return it
        // the next node in the list is the new head node
    }
    search(data){
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false
    }
}
