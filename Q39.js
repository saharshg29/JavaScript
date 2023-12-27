// 2427. Number of Common Factors

// Given two positive integers a and b, return the number of common factors of a and b.

// An integer x is a common factor of a and b if x divides both a and b.

var commonFactors = function(a, b) {
    let limit = 0
    let count = 0
    a < b ? limit = a: limit = b;
    for(let i = 1; i<=limit; i++) {
        if(a%i === 0 && b%i===0) {
            count++
        }
    }
    return count
};

let a = 25
let b = 30

console.log(commonFactors(a,b));