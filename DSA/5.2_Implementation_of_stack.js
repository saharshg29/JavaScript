// Implementing stack data structure

class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.first) {
            this.first = newNode;
            this.last = newNode; 
        }else {
            let temp = this.first
            this.first = newNode
            newNode.next = temp
        }
        this.size++
    }
    pop() {
        if (this.size === 0) {
            return null
        }else {
            let deleted = this.first
            this.first = deleted.next
            deleted.next = null
            this.size--;
            if (this.size === 0) {
                this.last = null
            }
            return deleted
        }
    }
}

let stack = new Stack()
stack.push(2)
stack.push(1)
stack.push(3)
console.log(stack)
console.log(stack.pop());
console.log(stack)
console.log(stack.pop());
console.log(stack)
console.log(stack.pop());
console.log(stack)



//Time Complexities
// For Insertion --> O(1)
// For Removal --> O(1)
// For Searching --> O(n)
// For Accessing --> O(n)