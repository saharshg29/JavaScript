var nums = [3, 3]
var val = 2
var removeElement = function (nums, val) {
    if (nums.indexOf(val) == -1) {
        console.log(nums);
        return
    }

    else if (nums.length == 2 && nums[1] == nums[0]) {
        nums.pop()
        nums.pop()
    }
    else {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == val) {
                nums.splice(i, 1)
                i = -1
            }
        }
    }

    console.log(nums)
};
removeElement(nums, val)