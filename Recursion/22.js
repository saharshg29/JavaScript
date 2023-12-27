// Combination Sum 1

// Leetcode link :: ---------------> https://leetcode.com/problems/combination-sum/


let all = (idx, target, arr, ans, ds) => {
    if (idx >= arr.length) {
        if (target === 0) {
            ans.push([...ds])
            // console.log(ans);
        }
        return
    }

    if (arr[idx] <= target) {
        ds.push(arr[idx])
        all(idx, target-arr[idx], arr, ans,ds)
        ds.pop()
    }

    all(idx+1, target, arr, ans,ds)
}


var combinationSum = function (candidates, target) {
  let ans = [];
  let ds = [];
  all(0, target, candidates, ans, ds);
  return ans;
};

let candidates = [2, 3, 6, 7],
  target = 7;

console.log(combinationSum(candidates, target));
