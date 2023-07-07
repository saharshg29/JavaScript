// INSERTION SORT


// Start by picking up second element of an array
// Compare second element with first them and place them in order
// Now similarly take third element and compare it with rest two 
// and repeat the same steps till last element of array

// [2,1,9,7,6,4] -> Input
// [1,2,4,6,7,9] -> Output

// i->  1
// j->  0
// key->2
// []

function insertionSort(arr, n) 
{ 
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
   
        
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    } 
    return arr
} 

let array = [2,1,9,1,7,6,4]
console.log(insertionSort(array, array.length));