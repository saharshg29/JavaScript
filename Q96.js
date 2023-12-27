// 1941. Check if All Characters Have Equal Number of Occurrences

// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

var areOccurrencesEqual = function(s) {
    let mapped = {}
    for (let key of s) {
        mapped[key] = (mapped[key] || 0 ) + 1
    }
    mapped = Object.values(mapped)
    let key = mapped[0]
    for (let i = 0; i< mapped.length; i++) {
        if (mapped[i] !== key) {
            return false
        }
    }
    return true
};

let s = "abacabc"
console.log(areOccurrencesEqual(s))