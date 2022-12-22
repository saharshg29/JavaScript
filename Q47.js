// 2119. A Number After a Double Reversal

// Reversing an integer means to reverse all its digits.

// For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

var isSameAfterReversals = function (num) {
  let rev = num.toString().split("");
  rev = rev.reverse();
  rev = rev.join("");
  rev = parseInt(rev);
  rev = rev.toString().split("");
  rev = rev.reverse();
  rev = rev.join("");
  rev = parseInt(rev);
  if (num != rev) {
    return false;
  } else {
    return true;
  }
};

let nums = 1800;

console.log(isSameAfterReversals(nums));
