//Doubly Linked List

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

const dll = new DoubleLinkedList()

dll.push("Hello")
dll.push("world")

console.log(dll)