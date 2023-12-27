// 1539. Kth Missing Positive Number

// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

// Return the kth positive integer that is missing from this array.

var findKthPositive = function(arr, k) {
    let missing = []
    // let count = 1;
    for(let i = 0; missing.length < k;i++) {
        if (arr.includes(i)) {
            continue
        }else {
            missing.push(i)
            if ( i === 0) {
                missing.shift()
            }
        }
    }
    console.log(missing);

    return missing[missing.length-1]
    
    
};

let arr = [1,2,3,4]
let k = 2
console.log(findKthPositive(arr,k));