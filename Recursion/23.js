// Combination Sum 2

// problem link -----------> https://leetcode.com/problems/combination-sum-ii/description/

let all = (idx, target, arr, ds, ans) => {
  if (target === 0) {
    // console.log(ds);
    ans.push([...ds]);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (i > idx && arr[i] === arr[i - 1]) {
      continue;
    }
    if (arr[i] > target) {
        break
    }
    ds.push(arr[i])
    all(i+1, target-arr[i], arr,ans,ds)
    ds.pop()
  }
};

var combinationSum2 = function (candidates, target) {
    candidates.sort((a,b) => {
        return a-b
    })
  let ans = [];
  let carrier = [];
  all(0, target, candidates, carrier, ans);

  return ans;
};

let candidates = [10, 1, 2, 7, 6, 1, 5];
target = 8;
console.log(combinationSum2(candidates, target));
