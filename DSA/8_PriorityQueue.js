// A data structure where each element has a priority
// Element with higher priorities are served before element of lower priority
// You can apply this with binary heap and with list array too

class Node {
    constructor(val, property) {
        this.value = val;
        this.priority = property
    }
}

class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    enqueue(value, priority) {
        const newNode = new Node(value, priority)
        this.values.push(newNode)
        let idx = this.values.length - 1
        const myNewElement = this.values[idx]
        while(idx > 0) {
            let parentIdx = Math.floor((idx-1)/2)
            let parentElement = this.values[parentIdx]
            if (myNewElement.priority >= parentElement.priority) {  //Change the less tha sign to greater than in order to get Min heap                break
            }
            this.values[parentIdx] = myNewElement
            this.values[idx] = parentElement
            idx = parentIdx
        }
    }

    dequeue() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }
        return max
    }

    sinkDown() {
        let idx  =0;
        const length = this.values.length
        const element = this.values[0]
        while (true) {
            let leftChildIdx = 2*idx+1
            let rightChildIdx = 2*idx+2
            let swappedidx = null
            let leftChild;
            let rightChild
            if (leftChildIdx<length) {
                leftChild = this.values[leftChildIdx]
                if (leftChild.priority < element.priority) {//Change the less tha sign to greater than in order to get Min heap                break
                    swappedidx = leftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if ((swappedidx === null && rightChild.priority < element.priority) || (swappedidx !== null && rightChild.priority < leftChild.priority)) {//Change the less tha sign to greater than in order to get Min heap                break
                    swappedidx = rightChildIdx
                }
            }
            if (swappedidx == null) {
                break
            }

            this.values[idx] = this.values[swappedidx]
            this.values[swappedidx] = element
            idx = swappedidx
        }
    }
}

let pq = new MaxBinaryHeap()

pq.enqueue("Second", 1)
pq.enqueue("third", 5)
pq.enqueue("First", 3)
pq.enqueue("First", 4)

// pq.dequeue()

console.log(pq.values);

// Binary heap Time Complexity
// Insertion -> O(log N)
// Removal -> O(log N)
// Search -> O(N)