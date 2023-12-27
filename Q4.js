var moveZeroes = (nums) => {
    this.new = []
    if (nums[0] == 0) {
        nums.shift()
        this.new.push(0)
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            nums.splice(i, 1)
            this.new.push(0)
        }
    }





    nums = nums.concat(this.new)
    console.log(nums)

}
moveZeroes([0,0, 1])