// 1752. Check if Array Is Sorted and Rotated

// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

// There may be duplicates in the original array.

// Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

var check = function (nums) {
  let min = Math.min(...nums);
  let indexOfMin = nums.indexOf(min);
  for (let i = indexOfMin; i < nums.length-1; i++) {
    console.log(nums[i], nums[i+1]);

    if (nums[i] > nums[i + 1]) {
        console.log(nums[i], nums[i+1]);
      return false;
    }
  }
  for (let i = 0; i < indexOfMin-1; i++) {
    console.log(nums[i], nums[i+1]);

    console.log(nums[i], nums[i+1]);

    if (nums[i] > nums[i + 1]) {
      return false;
    }
  }
  return true;
};

let nums = [2,1,3,4]

console.log(check(nums));
