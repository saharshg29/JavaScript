// MERGE SORT

// Uses divide and conquer approach
// It uses the logic that array of 0-1 element is always sorted
// Here we divide one array into multiple arrays of 0-1 elements
// Then we sort them and then merger them again

function merge(arr, l, m, r) {
  let n1 = m - l + 1;
  let n2 = r - m;

  let L = new Array(n1);
  let R = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
  }

  let i = 0;

  let j = 0;

  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function mergeSort(arr, l, r) {
  if (l >= r) {
    return;
  }
  let m = l + parseInt((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

// let array1 = [1,5,9]
// let array2 = [2, 6, 10, 18]
let array = [1, 5, 2, 3, 6, 9, 8];
mergeSort(array, 0, array.length - 1);
console.log(array);


// Time complexity of merge sort is logarithmic.
// Thus merge sort is very efficient algorithm for sorting