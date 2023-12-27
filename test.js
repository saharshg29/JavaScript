class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class CircularQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(value) {
    let node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = this.head;
      this.head.next = this.tail;
      this.head.prev = this.head;
      this.tail.next = this.head;
      this.tail.prev = this.head;
    } else {
      let current = this.tail;
      this.tail.next = node;
      node.prev = current;
      this.tail = node;
      this.tail.next = this.head;
      this.head.prev = this.tail;
    }
    this.size++;
  }

  remove(k) {
    let count = 1;
    let current = this.head;
    while (count !== 10) {
     console.log(current.value)
     current = current.next
     count++
    }
  }
}

let cq = new CircularQueue();

for (let i = 1; i<= 5; i++ ) {
  cq.add(i)
}

// console.log(cq.head);
cq.remove(1)

// console.log(cq.head.value);
// console.log(cq.head.next.value);
// console.log(cq.head.next.next.value);
// console.log(cq.head.next.next.next.value);
// console.log(cq.head.next.next.next.next.value);