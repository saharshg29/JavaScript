// 80 Remove Duplicate from sorted array 2

// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

var removeDuplicates = function (nums) {
  let map = {};
  let ans = [];
  for (let i of nums) {
    map[i] = (map[i] || 0) + 1;
  }
  let entries = Object.entries(map);
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1] >= 2) {
      ans.push(Number(entries[i][0]));
      ans.push(parseInt(entries[i][0]));
    } else {
        console.log(entries[i][1])

      ans.push(parseInt(entries[i][0]));
    }
  }

  return ans;
};

let nums = [1,1,1,2,2,3];

console.log(removeDuplicates(nums));
