// Binary search is a searching technique that uses divide and conquer technique to find the key element in array.
// If key elemnt is found then return true else return false.
// Binary search algorithm works only on sorted array.
// First we will find the middle element of array.
// If the middle element is equal to key element then return true.
// If the key element is greater then the middle element then check in the right sub array
// If the key element is smaller then the middle element then check in the left sub array

// array = [1,2,3,4,5]
// key = 6  Output -> False
// key = 5  Output -> True

function BinarySearch(array, key) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor(start + end) / 2;
  while (key !== array[middle] && start <= middle) {
    if (key > array[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor(start + end) / 2;
  }
  return array[middle] === key ? middle : -1;
}

let array = [1, 2, 3, 4, 5];
let key = 1;
console.log(BinarySearch(array, key));
