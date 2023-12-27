var findFinalValue = function (nums, original) {
    for (let i = 0; i<nums.length; i++) {
        if (original == nums[i]) {
            original *= 2;
            
            original = findFinalValue(nums, original)
        }
    }
    return original
};

let par1 = [8,19,4,2,15,3];
let par2 = 2;
console.log(findFinalValue(par1, par2));
