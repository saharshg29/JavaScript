// SELECTION SORT

// THIS IS SIMILAR TO BUBBLE SORT THE ONLY DIFFERENCE BEING INSTEAD OF FIRST PLACING LARGER VALUES PLACE SMALLER ONE
// SLOWEST SORTING ALGORTHM

// STEPS

// store the first element as smallest element
// compaare it with remaining elements until you find smaller one
// in case a small number is found treat it as new min number
// if min number and starting number are not same then swap them
// This step is repeated until the array is sorted

// [0, 2, 34, 22, 10, 19] -> INPUT
// [0, 2, 10, 19, 22, 34] -> OUTPUT

// TIME COMPLEXITY -> O(n^2) QUADRATIC TIME COMPLEXITY

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}

let array = [0, 2, 34, 22, 10, 19];
console.log(selectionSort(array));
