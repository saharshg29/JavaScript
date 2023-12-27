//Doubly Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    // THE PUSH OPERATION IS USED FOR ADDING A NEW ELEMENT TO THE DOUBLY LINKED LIST
    // IN CASE THE LINKED LIST IS EMPTY THEN WE WILL KEEP HEAD AND TAIL AS THE NEW NODE
    // THAT IS (head -> newNode) and also (tail -> newNode)
    // IN CASE IF AN ELEMENT ALREADY EXIST THERE IN THE DOUBLY LINKED LIST THEN WE WILL SET THE FOLLOWING
    // tail.next -> newNode
    // newNode.prev -> tail
    // tail -> newNode
    // DONT FORGET TO INCREMENT LENGTH BY 1 AFTER EACH PUSH OPERATION
    // AT LAST RETURN THIS
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // IN CASE OF NO ELEMENT (IF LENGTH === 0)OR AN EMPTY HEAD RETURN UNDEFINED
    // IN CASE OF ONE ELEMENT(IF LENGTH === 1)
    // STORE current -> tail;
    // UPDATE head->null AND  tail->null
    // ELSE IF THERE ARE MORE ELEMENTS THEN DO THE FOLLOWING
    // tail -> current.prev
    // tail -> null
    // AFTER REMOVING THE EXTRA NODE DECREMENT LENGTH BY 1
    // RETURN current

    let current = this.tail;
    if (!this.head) {
      return undefined;
    } else if (this.length === 1) {
      // let current = this.head
      this.head = null;
      this.tail = null;
    } else {
      this.tail = current.prev;
      this.tail.next = null;
      current.prev = null;
    }
    this.length--;
    return current;
  }

  shift() {
    // THIS IS OPERATION IS PERFORMED TO REMOVE AN ELEMENT FROM THE FIRST POSITION
    // IF (LENGTH === 0) RETURN UNDEFINED
    // IF (LENGTH === 1) SET head->null AND ALSO tail->null
    // ELSE {
    // SET NEW HEAD AS NEXT OF CURRENT HEAD
    // SET NEW HEAD'S PREVIOUS PROPERTY AS NULL
    // SET OLD HEAD'S NEXT AS ALSO NULL
    // }
    // DECREMENT LENGTH BY 1
    // RETURN OLD HEAD
    let current = this.head;
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = current.next;
      this.head.prev = null;
      current.next = null;
    }
    this.length--;
    return current;
  }

  unshift(value) {
    // UNSHIFT METHOD IS USED FOR ADDING AN ELEMENT AT THE FIRST POSITION
    // newNode -> value;
    // IF (length === 0) {
    // head->newNode
    // tail->newNode
    // }
    // ELSE {
    // head.prev -> newNode
    // newNode.next -> head
    // head -> newNode
    //
    // }
    // INCREMENT LENGTH BY 1
    // RETURN THE HEAD OF DOUBLY LINKED LIST
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this.head;
  }

  get(index) {
    // THIS METHOD WILL TAKE A PARTICULAR NUMBER AS AN ARGUMENT AND IT WILL RETURN THE ELEMENT PRESENT AT THAT PARTICULAR INDEX
    // IF INDEX DOES NOT EXIST THEN IT WILL RETURN NO VALUE FOUND
    // IF INDEX IS LESS  THAN 0 OR GREATER THAN LENGTH RETURN NULL
    // IF INDEX IS LESS OR EQUAL TO HALF OF LIST
    // LOOP WILL START FROM HEAD TO MIIDDLE
    // NODE IS RETURNED ONCE IT IS FOUND
    // IF INDEX IS GREATER THAN HALF OF LIST
    // LOOP WILL START FROM TAIL TO MIDDLE
    // NODE IS RETURNED ONCE IT IS FOUND
    let count = 0;
    let current = this.head;
    if (index > this.length || index < 0) {
      return null;
    } else if (index <= this.length / 2) {
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.next;
        count--;
      }
    }

    return current;
  }

  set(index, value) {
    // SET METHOD IS USED FOR REPLACING A VALUE OF A NODE
    // FIRST CREATE A VARIABLE WHICH IS RESULT OF THE VALUE RETURNED BY GET METHOD
    // IF NODE RETURNED BY get() RETURN A VALID NODE THEN,
    // REPLACE THE VALUE OF THIS NODE TO THE NEW VALUE
    // RETURN TRUE
    // IF GET RETURN NULL THEN WE WILL RETURN FALSE
    let currentNode = this.get(index)
    if(currentNode) {
        currentNode.value = value;
        return true
    }
    return false
  }

  insert(index, value) {
    // THIS METHOD WILL BE USED TO INSERT A NEW NODE INSIDE AN ALREADY EXISTING DOUBLY LINKED LIST
    // IF INDEX < 0 || INDEX > LENGTH THEN IN THIS CASE RETURN FALSE
    // IF GIVEN INDEX IS 0 THEN CALL UNSHIFT METHOD AND PASS VALUE AS THE ARGUMENT
    // IF INDEX === LENGTH THEN CALL PUSH METHOD AND PASS THE VALUE AS AN ARGUMENT
    // USE GET METHOD TO GET VALUE OF INDEX -1
    // SET THE NEXT VALUE OF INDEX-1 NODE TO THIS NEW NODE
    // AND NEXT OF THIS NEW NODE TO BE THE OLD NEXT OF INDEX-1 NODE
    // PREVIOUS OF NEW NODE WILL BE THIS INDEX-1 NODE
    // INCREMENT LENGTH BY 1
    // RETURN TRUE
    if (index >= this.length || index<0) {
        return false
    }else if(index === 0){
        this.unshift(value)
    }else if (index === this.length-1) {
        this.push(value)
    }else {
        const prevNode = this.get(index-1)
        const newNode = new Node(value);
        const afterNode = prevNode.next;
        prevNode.next = newNode
        newNode.prev = prevNode
        newNode.next = afterNode
        afterNode.next = newNode
        this.length++
        return true;
    }

  }

  delete(index) {
    // THIS METHOD REQUIRES INDEX AS THE ARGUMENT FROM WHERE A NODE NEEDS TO BE DELETED
    // IF INDEX IS LESS THAN ZERO OR GREATER THEN THE OR EQUAL TO THE LENGTH THEN JUST RETURN THE HEAD AS IT IS
    // IF INDEX IS 0 THEN CALL SHIFT METHOD
    // IF INDEX IS SAME AS LENGTH-1 CALL POP() METHOD
    // USE GET METHOD TO ACCESS THE ITEM WHICH NEEDS TO BE REMOVED
    // UPDATE NEXT AND PREVIOUS PROPERTY OF THIS CURRENT NODE TO DELETE THIS NODE
    // SET THE NEXT AND PREV OF THIS CURRENT NODE TO NULL
    // DECREMENT LENGTH BY 1 
    // RETURN THE CURRENT NODE THAT IS THE THE NODE REMOVED FROM THE LINKED LIST
    if (index<0 || index > this.length-1) {
        return undefined
    }else if (index === 0 ) {
        return this.shift()
    }else if (index === this.length-1) {
        return this.pop()
    }else {
        let currentNode = this.get(index)
        currentNode.prev.next = currentNode.next
        currentNode.next.prev = currentNode.prev
        currentNode.prev = null
        currentNode.next = null
        this.length--
        console.log("is being printerd")
        return currentNode
    }
  }
}

const dll = new DoubleLinkedList();

dll.push("Hello");
dll.push("world");
dll.push("Hello to you");
dll.push("Guys");

//Adding a new element at the head
dll.unshift("Ohhhhayo");

// console.log("removed one is ",dll.pop());

// console.log(dll.shift());
dll.set(1, "Saharsh")
dll.set(2, "bolo be ")
console.log(dll.delete(1))
// console.log(dll.get(2));
console.log(dll);


// TIME COMPLEXITIES
    // For Insertion -> O(1)
    // For Removal -> O(1)
    // For Searching -> O(n) or O(n/2) as you have access to both head and tail
    // For accessing -> O(n)

// In doubly linked list we have two pointers one for previous node and another one for next node
// Memory consumption increases as we are havving two index instead of one