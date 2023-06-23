let all = (i, nums, target, varSum = 0, empty = []) => {
  console.log(Math.max(...empty), empty)
  if (Math.max(...empty) > target) {
    return 0;
  }
  if (i >= nums.length) {
    let sum = Math.max(...empty) + Math.min(...empty);
    if (sum <= target) {
      return 1;
    }
    return 0;
  }

  varSum += nums[i];
  empty.push(nums[i]);
  let left = all(i + 1, nums, target, varSum, empty);
  varSum -= nums[i];
  empty.pop();
  let right = all(i + 1, nums, target, varSum, empty);
  return left + right;
};

let nums = [
  14, 4, 6, 6, 20, 8, 5, 6, 8, 12, 6, 10, 14, 9, 17, 16, 9, 7, 14, 11, 14, 15,
  13, 11, 10, 18, 13, 17, 17, 14, 17, 7, 9, 5, 10, 13, 8, 5, 18, 20, 7, 5, 5,
  15, 19, 14,
];
target = 22;

console.log(all(0, nums, target));
