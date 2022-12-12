var dominantIndex = function (nums) {
  let values = [];
  let largest = nums[0];
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) largest = nums[i];
  }
  let largeId = nums.indexOf(largest);
  for (let i = 0; i < nums.length; i++) {
    // if (i == largeId) continue;
    if (largest >= nums[i] * 2) count++;
  }
  if (count === nums.length) {
    return largeId;
  } else {
    return -1;
  }
};

var par1 = [1, 2, 3, 4];

console.log(dominantIndex(par1));
