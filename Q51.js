// 1089. Duplicate Zeros

// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

var duplicateZeros = function (arr) {
  let length = arr.length;
  let final = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i + 1, 0, 0);
      i = i + 1;
    }
  }
  for (let i = arr.length; i > length; i--) {
    arr.pop();
  }
};
let arr = [1, 0, 2, 3, 0, 4, 5, 0];

console.log(duplicateZeros(arr));
