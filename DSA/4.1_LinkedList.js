// What is linked List?
// Linked list is basically a way of storing data in such a way that each element is represented by a node
// where this node stores the value of current node as well as the address of next node (for singly linked list)
// whereas the address of next and previous tail for doubly linked list

// Accessing element in linked list is bit time consuming whereas adding and deletion of element is faster as
// compared to the simple array or simple list

// In linked list elements are stored in NON CONTIGUOUS MEMORY LOCATION

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  //   The below commented function is for traversing through the list

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // SOLUTION FOR POP
  // If no element exist then head and tail are same as the new element
  // To add new element at tail tail -> next = newNode; tail = newnode; length++

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //   SOLUTION FOR POP
  //   If no nodes then return undefined
  //   loop through the list until you reach the tail
  //   set the next property on 2nd last node to null
  //   set tail to this 2nd last node
  //   decrement length by 1
  //   return the value of node you have removed

  pop() {
    if (this.head === null) {
      return undefined;
    }
    if (this.length === 1) {
      let popped = this.head;
      this.length = this.length - 1;
      this.head = null;
      this.tail = null;
      return popped;
    }
    let popped = new Node(null);
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    popped = current.next;
    current.next = null;
    this.tail = current;
    this.length = this.length - 1;
    console.log("Popped element is ", popped);
    return popped;
  }

  // CREATE NEW HEAD
  // To create new head first create newPointer = head; newnode -> next = newPointer; length++; return linkedList

  newHead(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    let newPointer = this.head;
    newNode.next = newPointer;
    this.head = newNode;
    this.length++;
    return this;
  }

  // Removing element from the begining of linked list

  shift() {
    if (this.head === null) {
      return undefined;
    }
    if (this.length === 1) {
      let removed = this.head;
      this.length = this.length - 1;
      this.head = null;
      this.tail = null;
      return removed;
    } else {
      let removed = this.head;
      this.head = this.head.next;
      this.length = this.length - 1;
      removed.next = null;
      return removed;
    }
  }

  // Using get -> Retriving node by its position
  // This function should accept an index
  // If index is greater or equal to length or negative return null
  // Loop through the list until you get the value at that index
  // Return the value at that specific index

  get(index) {
    let current = this.head;
    let count = 0;
    if (index < 0 || index >= this.length) {
      return null;
    }
    while (count !== index) {
      count = count + 1;
      current = current.next;
    }
    return current;
  }

  // Implementing set() to update value at a given index
  // Arguments are new value and index
  // Use get function to find specific node
  // If node not found return false
  // If node found then set value of the node to new passed value and return true

  set(value, index) {
    let current = this.get(index);
    if (current === null) {
      return false;
    } else {
      current.value = value;
      return true;
    }
  }

  // Implenting insert to add new element in linked list based on the given index

  // If index is less than 0 or greater then length then return false
  // If index === length {push(value)}
  // If index === 0 { newHead(value) }
  // otherwise
  // We will use get method to get access to index - 1 node
  // Set next property on this node to newNode
  // Set next property of newNode to previous next of node
  // increment length i.e. length++
  // return true
  
  insert(value, index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    if (index === 0) {
      this.newHead(value);
      return this;
    }
    if (index === this.length - 1) {
      this.push(value);
      return this;
    } else {
      this.length++
      let newNode = new Node
      let current = this.get(index - 1);
      let remaining = this.get(index);
      current.next = newNode;
      newNode.value = value
      newNode.next = remaining;
      return this;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null
    }if (index === 0) {
      return this.shift()
    } if (index === this.length - 1) {
      return this.pop()
    } else {
      let previous = this.get(index - 1)
      let removed = this.get(index)
      previous.next = removed.next
      this.length--;
      return removed
    }
  }


}

// PERFORMING OPEARIONS ON LINKED LIST
let ll = new SingleLinkedList(); //Initialising a new linked list
ll.push(2); // Adding first element
ll.push(2); // Adding next element
ll.push(3); // Adding next element
// ll.newHead(1);                   // Adding element at begining or creating new head
// let removed = ll.shift(); // Removing element from begining of linkedlist
// console.log(removed);
// ll.pop()                         // Removing element from the end of linked list
// console.log(ll.get(8))              // Getting an element from its index value
// console.log(ll.head); // Printing head of linked list
// console.log(ll.tail); // Printing tail of linked list
// console.log(ll.set("HI", 2)); // Updating value of linked list at particular index
// console.log(ll.insert(56, 1));
// console.log(ll.remove(2));
ll.traverse();

console.log(ll); // Print entire linked list
