// PRINTING SUBSEQUENCE WHOSE SUM IS K
// Parameterized recursion

let all = (idx, arr, sum, varSum = 0, empty = []) => {
  if (idx >= arr.length) {
    // let pre = 0;
    // for (let i = 0; i < empty.length; i++) {
    //   pre += empty[i];
    // }
    // if (pre === sum) {
    //   console.log(empty);
    // }
    // console.log(varSum);
    if (varSum === sum) {
      console.log(empty);
    }
    return;
  }

//   console.log(varSum);
  all(idx + 1, arr, sum, varSum, empty);
  empty.push(arr[idx]);
  varSum += arr[idx];
  all(idx + 1, arr, sum, varSum, empty);
  empty.pop();
  varSum -= arr[idx];
};

let arr = [3, 1, 2],
  sum = 3;

all(0, arr, sum);
