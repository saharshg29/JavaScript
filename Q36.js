// 1827. Minimum Operations to Make the Array Increasing

// You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1.

// For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].
// Return the minimum number of operations needed to make nums strictly increasing.

// An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1. An array of length 1 is trivially strictly increasing.

var minOperations = function (nums) {
  let steps = 0;
  for (let i =0; i<nums.length; i++) {
    if(nums[i]<nums[i+1]){
        console.llog("if called")
        continue
    }else {
        console.log("called")
        steps = steps+(1+nums[i+1]-nums[i])
        console.log(steps)
    }
  }

  return steps;
};

let nums = [1, 1, 1];
console.log(minOperations(nums));
