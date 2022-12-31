// 189. Rotate Array
// Given an array, rotate the array to the right by k steps, where k is non-negative.

var rotate = function(nums, k) {
    let copy = nums;
    let second = nums;
    let arrLength = nums.length
    let rotation = k % nums.length
    nums = [...copy.slice(arrLength-rotation), ...second.slice(0, arrLength-rotation)]
    console.log(nums);
};

let nums = [-1,-100,3,99]
let k = 2


rotate(nums,3);