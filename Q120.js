/**
 * @param {number[]} nums
 * @return {number}
 */

let subArray = (a) => {
  let arr = [];
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length + 1; j++) {
      let temp = a.slice(i, j);
      arr.push(temp)
    }
  }
  return arr;
};
var findMaxLength = function (nums) {
  if (nums.length === 1) {
    return 0;
  }
  if (
    nums.length === 2 &&
    ((nums[0] === 0 && nums[1] === 1) || (nums[1] === 0 && nums[0] === 1))
  ) {
    return 2;
  }
  let all = subArray(nums);
  all.sort((a, b) => b.length - a.length);
  for (let i = 0; i < all.length; i++) {
    all[i].sort((a, b) => {
      return a - b;
    });
    if (all[i][all[i].length / 2 ] === 1) {
      return all[i].length;
    }
  }
  return 0;
};

let nums = [0, 1];

console.log(findMaxLength(nums));
