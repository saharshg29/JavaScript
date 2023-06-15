// 560 Subarray sum equals K

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.


function subarray(nums) {
    let array = []
    for (let i = 0; i<nums.length; i++) {
        for (let j = i; j<nums.length; j++) {
            array.push(nums.slice(i,j+1))
        }
    }
    return array
}


var subarraySum = function(nums, k) {
    let sub = subarray(nums)
    let count = 0
    for (let i = 0; i<sub.length; i++) {
        let sum = 0
        for (let j = 0; j<sub[i].length; j++) {
            sum+=sub[i][j]
        }
        if (sum === k) {
            count++
        }
    }
    return count
};



let nums = [1,1,1], k = 2




console.log(subarraySum(nums,k));