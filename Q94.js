// 448. Find All Numbers Disappeared in an Array

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

var findDisappearedNumbers = function(nums) {
    let answer = []
    for (let i = 1; i<nums.length+1; i++) {
        if (nums.includes(i) === false) {
            answer.push(i)
        }
    }
    console.log(answer);
};

let nums = [1,1]

findDisappearedNumbers(nums)