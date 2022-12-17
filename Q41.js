// 2455. Average Value of Even Numbers That Are Divisible by Three

// Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.

// Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.

var averageValue = function(nums) { 
    let div = []
    let average= 0;
    for(let i = 0; i<nums.length; i++) {
        if (nums[i]%6 === 0) {
            div.push(nums[i])
        }
    }
    for (let i = 0; i<div.length; i++) {
        average = average + div[i]
    }
    console.log({average, div})
    if (average/div.length > 0) {
         return Math.round(average/div.length)
    } else {
        return 0
    }
   
};

let nums = [1,3,6,10,12,15]


console.log(averageValue(nums));