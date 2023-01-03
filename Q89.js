// 287. Find the Duplicate Number

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

var findDuplicate = function(nums) {
    let mapped = {}
    for (let key of nums) {
        mapped[key] = (mapped[key] || 0) + 1
    }
    mapped = Object.entries(mapped)
    for (let i = 0; i<mapped.length; i++) {
        if (mapped[i][1] > 1) {
            return parseInt(mapped[i][0])
        }
    }
};

let nums = [1,3,4,2,2]

console.log(findDuplicate(nums));