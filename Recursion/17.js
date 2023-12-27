// Printing Subseqences of a list using recursion

function all(idx, arr, ans, empty = []) {
  if (idx >= arr.length) {
    ans.push([...empty]);
    return;
  }
  empty.push(arr[idx]);
  all(idx + 1, arr, ans, empty); // -----------------> Take an element
  empty.pop();
  all(idx + 1, arr, ans, empty); // -----------------> Not take element
}

let ans = [];
let arr = "abc";
let empty = [];

all(0, arr.split(""), ans);

console.log(ans);
