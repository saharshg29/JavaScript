// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

var searchRange = function(nums, target) {
    let start = 0
    let end = 0
    let answer = []
    if(nums[0] === target && nums.length === 1) {
        return [0, 0]
    }
    if(nums.includes(target) === false) {
        return [-1, -1]
    }else {
        for(let i = 0; i<nums.length; i++) {
            if(nums[i] === target && nums[i+1]!== target ) {
                answer.push(i)
                answer.push(i+1)
            }
        }
    }
    if (answer.length === 1) {
        answer.push(answer[0])
    }
    return answer
};

let nums = [1, 3]
let target = 1
console.log(searchRange(nums, target));