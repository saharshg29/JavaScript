// 2000. Reverse Prefix of Word

// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

var reversePrefix = function(word, ch) {
    if(!word.includes(ch)) {
        return word
    }
    let first = []
    for(let i = 0; i<word.length;i++) {
        if (word[i] === ch) {
            break;
        }else {first.push(word[i])}
    }
    first[first.length] = ch
    first = first.reverse()
    first = first.join("")
    for(let k = word.indexOf(ch)+1; k<word.length; k++ ){
        first = first+word[k]
    }
    return first
};

let word =
"abcdefd"
let ch = "d"

console.log(reversePrefix(word,ch));