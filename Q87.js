// 260. Single Number III

// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

var singleNumber = function(nums) {
    let answer = []
      let map = {}
      for (let key of nums) {
          map[key] = (map[key] || 0) + 1
      }
      nums = Object.entries(map)
      console.log(nums);
      for (let i = 0; i< nums.length; i++) {
          if (nums[i][1] === 1) {
              answer.push(parseInt(nums[i][0])) 
          }
      }
      return answer 
  };

let nums = [1,2,1,3,2,5]

console.log(singleNumber(nums));