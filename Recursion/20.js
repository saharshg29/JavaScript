// Print COUNT of  subsequence whose SUM is k
// FUNCTIONAL RECURSION

let all = (idx, arr, sum, varSum = 0, empty = []) => {
    if (idx >= arr.length) {
        if (varSum === sum) {
            return 1
        }else {
            return 0
        }
    }

    let left = all(idx+1, arr, sum, varSum, empty)
    empty.push(arr[idx])
    varSum+=arr[idx]
    let right = all(idx+1, arr, sum, varSum, empty)
    empty.pop()
    varSum-=arr[idx]
    return left+right
}

let arr = [3,5,6,7],
  sum = 9;

console.log(all(0, arr, sum));
