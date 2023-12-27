// Reversing an array using recursion

let arr = [1,2,3,4,5]

function reverse(l,r) {

    //USING two pointers
    if (l == r) {
        return
    }
    [arr[l], arr[r]] = [arr[r], arr[l]]
    reverse(l+1, r-1)
}

function reReverse(i) {

    //Reversing an array using a single pointer
    if (i === Math.floor(arr.length/2)) {
        return
    }
    [arr[i], arr[arr.length-i-1]] = [arr[arr.length-i-1], arr[i]]
    console.log(i);
    reReverse(i+1)
}

reReverse(1)

// reverse(0, arr.length-1)

console.log(arr)