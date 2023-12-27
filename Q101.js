// 703. Kth Largest Element in a Stream

// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Implement KthLargest class:

// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
// int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

var KthLargest = function (k, nums) {
  this.digits = nums;
  this.id = k
};

KthLargest.prototype.add = function (val) {
  this.digits.push(val);
  this.digits.sort((a, b) => {
    return a - b;
  });
  return this.digits[this.digits.length-1-this.id]
};

let fun = new KthLargest(3, [4,5,8,2])
console.log(fun.add(3))