const twonums = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i == j) {
                // console.log('5 -----> ', i, j)
                continue
            }
            else {
                if (nums[i] + nums[j] == target) {
                    return([i, j]);

                }
                else {
                    // console.log('13 ------> ', i, j)
                    continue
                }
            }
        }
    }
}

let req = twonums([1,2,3,4], 6)

console.log(req);