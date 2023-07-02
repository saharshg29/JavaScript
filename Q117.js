var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                nums.splice(i, 1);
                j = i

            }
            else {
                continue
            }
        }
    }
    console.log(nums);
};

let  nums = [0,0,1,1,1,2,2,3,3,4]

removeDuplicates(nums)