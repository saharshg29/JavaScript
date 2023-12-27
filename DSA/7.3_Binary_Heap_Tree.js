// It is very similar to binary search tree with some different rules
// In MAX BINARY HEAP parent node is always greater than child
// In MIN BINARY HEAP child node is always greater than parent

// 1-> Each parent has at most 2 child nodes
// 2-> Value of parent node will be greater than child node
// 3-> In case of max binary heap parent is greater than the children, but there is no guarantee between the siblings
// 4-> A binary heap is as compact as possible. All the children of each node are as full as they can first we fill left side then right

// The need to know about binary heap arises ebcause it is used to make priority queues which is very commonly used data structures.

// Array is being used to store binary heaps
// To find a child from a parent position
// --> For an array of index n,
// Left child is stored at 2n+1
// Right child is stored at 2n+2
// Parent is at index (n-1)/2

class MaxBinaryHeap {
  constructor() {
    // this.value = [41, 39, 33, 18,27,12]
    this.value = [];
  }

  insert(element) {
    this.value.push(element);
    let idx = this.value.length - 1;
    const myNewElement = this.value[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentElement = this.value[parentIdx];
      if (myNewElement < parentElement) {
        break;
      }
      this.value[parentIdx] = myNewElement;
      this.value[idx] = parentElement;
      idx = parentIdx;
    }
    return this.value;
  }

  // BINARY HEAP REMOVE MAX
  // swap the first value in the values property with the highest element in the value property
  // pop out last value from calues
  // now we need to sink down this new root
  // parent index(root) is 0
  // we will find child index using 2n+1, 2n+2
  // replace parent with the largest child
  // repeat the same process
  // return old root (element which we have removed)

  extractMax() {
    const max = this.value[0];
    const end = this.value.pop();
    if (this.value.length > 0) {
      this.value[0] = end;
      this.sinkDown();
    }
    return max
  }

  sinkDown() {
    let idx = 0;
    const length = this.value.length;
    const element = this.value[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 1;
      let swappedidx = null;
      let leftChild;
      let rightChild;
      if (leftChildIdx < length) {
        leftChild = this.value[leftChildIdx];
        if (leftChild > element) {
          swappedidx = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.value[rightChildIdx];
        if (
          (swappedidx === null) & (rightChild > element) ||
          (swappedidx !== null && rightChild > leftChild)
        ) {
          swappedidx = rightChildIdx;
        }
      }
      if (swappedidx == null) {
        break;
      }
      this.value[idx] = this.value[swappedidx];
      this.value[swappedidx] = element
      idx = swappedidx;
    }
  }
}

const nbh = new MaxBinaryHeap();
console.log(nbh.insert(55));
console.log(nbh.insert(45));
nbh.insert(50);
nbh.insert(60);
console.log(nbh.value);
console.log(nbh.extractMax());
console.log(nbh.extractMax());
