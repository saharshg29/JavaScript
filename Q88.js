// 137. Single Number II

// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.


var singleNumber = function(nums) {
    let map = {}
    for (let key of nums) {
        map[key] = (map[key] || 0) + 1
    }
    nums = Object.entries(map)
    console.log(nums);
    for (let i = 0; i< nums.length; i++) {
        if (nums[i][1] === 1) {
            return parseInt(nums[i][0])
        }
    }
};

let nums = [2,2,3,2]
console.log(singleNumber(nums));