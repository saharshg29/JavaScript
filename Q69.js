// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-z]/gi, '')
    s = s.toLowerCase()
    let temp = s.split("").reverse().join("")
    console.log(s, temp)
    if(s === temp) {
        return true
    }else {
        return false
    }
    
};


console.log(isPalindrome("ab_a"))