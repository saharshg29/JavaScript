// 1528. Shuffle String

// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

var restoreString = function(s, indices) {
    let answer = []
    for(let i = 0; i<s.length; i++) {
        answer[indices[i]] = s[i]
    }
    answer = answer.join("")
    return answer
    
};

let s = "codeleet"

let indices = [4,5,6,7,0,2,1,3]

console.log(restoreString(s, indices));