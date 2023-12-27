var searchRange = function (nums, target) {
  let initial = 0;
  let end = 0
  if (!nums.includes(target)) {
    return [-1, -1];
  }
  else if((nums.indexOf(target) == nums.lastIndexOf(target))){
    return [nums.indexOf(target), nums.indexOf(target)]
  } else {
    initial = nums.indexOf(target);
    for (let i = initial + 1; i < nums.length; i++) {
      if (nums[i] !== target) {
        console.log(i - 1);
        end = i - 1;
        break;
      }
      if (i === nums.length - 1) {
        end = nums.length - 1;
      }
    }
  }
  return [initial, end];
};

let nums = [1,1];

let target = 1;

console.log(searchRange(nums, target));
