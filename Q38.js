// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    let length = [];
    let prefix = ""
    let min = 0;
    for(let i = 0; i<strs.length; i++) {
        length[i] = strs[i].length
    }
    min = length.indexOf(Math.min(...length))
    min = strs[min]

    for(let i = 0; i< min.length; i++) {
        for(let j = 0; j<strs.length; j++) {
            for (let k = 0; k<strs[j].length; k++){
                if (min[k] === strs[j][k]) {
                    prefix = prefix.concat(min[k])
                }

            }
        }

    }

    strs = strs.sort()
    
    return prefix
    
};

let strs = ["flower","flow","flight"]

console.log(longestCommonPrefix(strs));