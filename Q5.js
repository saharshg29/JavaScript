// SEARCH INSERT POSITION

var searchInsert = function (nums, target) {
    if (nums.indexOf(target) == -1) {
        for (let i = 0; i < nums.length - 1; i++) {
            if (target > nums[i] && target < nums[i + 1]) {
                console.log("if part")
                nums.splice(i + 1, 0, target)
                break
            }
            else if (target > nums[nums.length - 1]) {
                nums.push(target)
                console.log("else if")
                continue
            }
        }
        console.log(nums.indexOf(target))
    }
    else {
        console.log(nums.indexOf(target))
    }
}

searchInsert([1, 3, 5, 6], 2)
