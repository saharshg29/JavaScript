// 1903. Largest Odd Number in String


// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

function subarrays(nums) {
    let array = []
    for (let i = 0; i<nums.length; i++) {
        for (let j = i; j<nums.length; j++) {
            array.push(BigInt(nums.slice(i,j+1).join("")))
        }
    }
    return array
}

var largestOddNumber = function(num) {
    num = num.split("")
    let subarray = subarrays(num)
    let odd = []
    for (let i = 0; i<subarray.length; i++) {
        if (subarray[i] % BigInt(2) !== 0) {
            odd.push(subarray[i])
        }
    }
    if (odd.length === 0) {
        return ""
    }else {
        odd.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0))
        return String(odd[odd.length-1])
    }
};

let num = "239537672423884969653287101"


console.log(largestOddNumber(num));