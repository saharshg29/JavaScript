class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value){
        // This method is used for inserting an element into the queue
        const newNode = new Node(value)
        if (this.size === 0) {
            this.first= newNode;
            this.last = newNode;
        }else {
            this.last.next = newNode
            this.last = newNode
        }
        this.size++
        return this.first
    }

    dequeue() {
        if (!this.first) {
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

let q = new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

q.dequeue()
q.dequeue()
console.log(q.dequeue());

console.log(q);

//Time Complexities of Queue is same as stack
// ---> For Insertion O(1)
// ---> For Removal O(1)
// ---> For Searching O(n)
// ---> For Accessing O(n)