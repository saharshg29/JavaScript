// 1331. Rank Transform of an Array

// Given an array of integers arr, replace each element with its rank.

// The rank represents how large the element is. The rank has the following rules:

// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.

var arrayRankTransform = function (arr) {
  let duplicate = [];
  let rank = [];
  let mapped = {};
  for (let i = 0; i < arr.length; i++) {
    duplicate.push(arr[i]);
  }
  arr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    rank.push(arr.indexOf(duplicate[i]) + 1);
  }
  for (let i in duplicate) {
    mapped[duplicate[i]] = (i || 0) + 1;
  }
  console.log(mapped);
  console.log(duplicate, arr);
  return rank;
};

let arr = [37, 12, 28, 9, 100, 56, 80, 5, 12];
console.log(arrayRankTransform(arr));
