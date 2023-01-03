// 136. Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

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

let nums = [4,1,2,2,1]

console.log(singleNumber(nums))