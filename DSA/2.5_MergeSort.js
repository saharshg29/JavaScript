// MERGE SORT

// Uses divide and conquer approach
// It uses the logic that array of 0-1 element is always sorted
// Here we divide one array into multiple arrays of 0-1 elements
// Then we sort them and then merger them again

function mergeSortedArrays(array1, array2) {
  // [5]  [1,2]
  let results = [];
  let i = 0;
  let j = 0;// 1 2
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      results.push(array1[i]);
      i++;
    } else {
      results.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    results.push(array1[i]);
    i++
  }
  while (j< array2.length) {
    results.push(array2[j]);
    j++
  }
  return results
}


function mergeSortAlgorithm(array) {
  if (array.length <= 1) {
    return array
  }
  let midPoint  = Math.floor(array.length/2)
  let leftPoint = mergeSortAlgorithm(array.slice(0, midPoint))
  let rightPoint = mergeSortAlgorithm(array.slice(midPoint))

  return mergeSortedArrays(leftPoint, rightPoint)
}

// let array1 = [5,1,2] [5] [1,2] []
// let array2 = [3, 6, 9, 8]
let array = [1, 5, 2, 3, 6, 9, 8];
console.log(mergeSortAlgorithm(array));

// Time complexity of merge sort is linear logarithmic. O(nlogn)
// Thus merge sort is very efficient algorithm for sorting
