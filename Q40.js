// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

var majorityElement = function(string) {
    let count = {}
    let max = 0 
    for(let key of string) {
        count[key] = (count[key] || 0) + 1
    }
    max = Object.keys(count).reduce(function(a, b){ return count[a] > count[b] ? a : b });
    return max
};


let nums = [3,2,3]

console.log(majorityElement(nums));