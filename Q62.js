// 912. Sort an Array

// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

function merge(left, right) {
    let sortedArr = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
  
    return [...sortedArr, ...left, ...right];
  }
  var sortArray = function(nums) {
      const half = nums.length / 2;
  
    if (nums.length <= 1) {
      return nums;
    }
  
    const left = nums.splice(0, half); 
    const right = nums;
    return merge(sortArray(left), sortArray(right));
  };