// 1287. Element Appearing More Than 25% In Sorted Array

// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

var findSpecialInteger = function (arr) {
  let mapped = {};

  for (let el of arr) {
    mapped[el] = (mapped[el] || 0) + 1;
  }
  let array = Object.entries(mapped);
  let max = [];
  for (let i = 0; i < array.length; i++) {
    max.push(array[i][1])
  }

  return Object.keys(mapped).find(key => mapped[key] === Math.max(... max));
  
};

let arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];

console.log(findSpecialInteger(arr));
