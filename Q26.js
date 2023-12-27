// 2006. Count Number of Pairs With Absolute Difference K

    var countKDifference = function(nums, k) {
        let count = 0;
        let index = 0;
        let difference = []
        for(let i = 0; i<nums.length; i++) {
            for (let j = 0; j<nums.length; j++) {
                difference[index] = Math.abs(nums[i]-nums[j])
                index++;
            }
        }
        for (let i = 0; i<nums.length; i++) {
            for (let j = i+1; j<nums.length; j++) {
                if (nums[i] > nums[j]) {
                    [nums[i], nums[j]] = [nums[j], nums[i]]
                }
            }
        }
        for(let i = 0; i<difference.length; i++) {
            if (difference[i] == k) {
            count++   
            }
        }
        return count/2
    };

let nums = [1,2,2,1]
let k = 1
console.log(countKDifference(nums, k));