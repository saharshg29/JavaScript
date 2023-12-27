// 2124. Check if All A's Appears Before All B's

// Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.


var checkString = function(s) {
    let start = s.indexOf("b")
    if (! s.includes("b")) {
        return true
    }
    for (let i = start; i<s.length; i++) {
        if (s[i] === "a") {
            return false
        }
    }
    return true
};


let s = "abab"
console.log(checkString(s));