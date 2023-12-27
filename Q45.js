// 2367. Number of Arithmetic Triplets

// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.

var arithmeticTriplets = function(nums, diff) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for(let j = i+1; j<nums.length; j++) {
            for(let k = j+1; k<nums.length;k++) {
                if (i<j && j<k && nums[j]-nums[i] === diff && nums[k]-nums[j] === diff) {
                    count++
                }
            }
        }
        
    }
    return count
};

let nums = [4,5,6,7,8,9]
let diff = 2

console.log(arithmeticTriplets(nums,diff));