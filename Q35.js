// 1323. Maximum 69 Number

// You are given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

var maximum69Number  = function(num) {
    num = num.toString()
    num = num.split("")
    let req = num.indexOf("6")
    num[req] = "9"
    return parseInt(num.join(""))
};

let num = 9999

console.log(maximum69Number(num));