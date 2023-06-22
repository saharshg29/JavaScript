// Printing Subseqences of a list using recursion

function all(idx, arr, empty = []) {
  if (idx >= arr.length) {
    console.log(empty);
    return;
  }
  // console.log(idx);
  empty.push(arr[idx]);
  all(idx + 1, arr, empty); // -----------------> Take an element
  // arr.splice(i, 1)
  empty.pop();
  all(idx + 1, arr, empty); // -----------------> Not take element
}

let arr = [3, 1, 2];

all(0, arr);
