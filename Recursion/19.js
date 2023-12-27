// Print any 1 subsequence whose SUM is k
// FUNCTIONAL RECURSION

let all = (idx, arr, sum, varSum = 0, empty = []) => {
  if (idx >= arr.length) {
    if (varSum === sum) {
      console.log(empty);
      return true;
    }
    return false;
  }

  if (varSum === sum) {
    console.log("Printed from first if");
    console.log(empty);
    return;
  }

  //   console.log(varSum);
  if (all(idx + 1, arr, sum, varSum, empty)) {
    return true;
  }
  empty.push(arr[idx]);
  varSum += arr[idx];
  if (all(idx + 1, arr, sum, varSum, empty)) {
    return true;
  }
  empty.pop();
  varSum -= arr[idx];
  return false;
};

let arr = [3, 1, 2],
  sum = 3;

all(0, arr, sum);
