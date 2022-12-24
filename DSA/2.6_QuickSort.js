// QUICK SORT

// It works on the concept that an array of 0 or 1 element is always sorted
// We will select one single element known as pivot and we will find where this pivot should be placed in a sorted array
// Once we have placed this pivot we can sort left and right of our array in the same manner

// In order to implement quick sort it is useful to first implement a function responsible arranging elements in an array on either side of our pivot
// This function will choose one pivot and will re-arrange aarray such that values less than pivot moves left side and greater than pivor on right side
// Order on left and right side of pivot does not matter

// Important -> pivoot helper should change all of this is existing array instead of creating a new one

// Ideally median value of array is choosen as pivot
// For simpler approach we will pick first element as a pivot


// PIVOT UTILITY FUNCTION (or) HELPER FUNCTION
// It will take 3 arguments: array, start index and end index
// We will grab pivot from start of our array

function pivotUtility(array, start = 0, end = array.length - 1) {
    let pivotIndex = start;
    let pivot = array[start];
    for (let i = 1; i<=)
}