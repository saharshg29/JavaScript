// BUBBLE SORT : STEPS

// 1 -> START LOOP(i) FROM END OF THE ARRAY TO THE BEGINNING POSITION
// 2 -> START NESTED LOOP(j) UNTIL i-1
// 3 -> IF arr[j] IS GREATER THAN arr[j+1] THEN SWAP THESE VALUES
// 4 -> RETURN YOUR SORTED ARRAY

// INPUT arr = [5,3,4,1,2,8,6,7]
// OUTPUT = [1,2,3,4,5,6,7,8]

// Time Complexity -> O(n^2) Quadratic
// Time complexity can be reduced to O(1) if line 15, 18, 24, 25, 26 are added

function bubbleSort(array) {
  // let isSwapped;

  for (var i = 0; i < array.length; i++) {
    // isSwapped = false
    for (var j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    // if(!isSwapped) {
    //     break
    // }
  }
  return array;
}

let array = [2, 3, 1, 4, 6, 7, 9, 8];
console.log(bubbleSort(array));
