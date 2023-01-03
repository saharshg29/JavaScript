// 164. Maximum Gap

// Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

// You must write an algorithm that runs in linear time and uses linear extra space.

var maximumGap = function(nums) {
    let difference = []
    nums = nums.sort((a,b) => {
        return a-b
    })
    if (nums.length === 1) {
        return 0
    }
    for (let i = 0; i<nums.length-1; i++) {
        difference.push(nums[i+1]-nums[i])
    }
    
    difference.sort((a,b) => {
        return a-b
    })

    return difference[difference.length-1]
};

let nums = [1,1,1,1,1,5,5,5,5,5]

console.log(maximumGap(nums));
