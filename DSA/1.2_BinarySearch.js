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


function binarySearch(arr, l, r, x){
	if (r >= l) {
		let mid = l + Math.floor((r - l) / 2);

		// If the element is present at the middle
		// itself
		if (arr[mid] == x)
			return mid;

		// If element is smaller than mid, then
		// it can only be present in left subarray
		if (arr[mid] > x)
			return binarySearch(arr, l, mid - 1, x);

		// Else the element can only be present
		// in right subarray
		return binarySearch(arr, mid + 1, r, x);
	}

	// We reach here when element is not
	// present in array
	return -1;
}

let arr = [ 2, 3, 4, 10, 40 ];
let x = 10;
let n = arr.length
let result = binarySearch(arr, 0, n - 1, x);
console.log(result)