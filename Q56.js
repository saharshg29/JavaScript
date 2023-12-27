var sortSentence = function(s) {
    let string = []
    let word = ""
    for(let i = 0; i<s.length; i++) {
        if (Number.isInteger(parseInt(s[i]))) {
            string[parseInt(s[i])-1] = word
            word = ""
        } else {
            console.log("line 13");
            word = word + (s[i])
        }
    }
    word = ""
    for (let i = 0; i< string.length; i++) {
        word = word + string[i] + " "
    }
    word = word.trim()
    word = word.split("")
    for (let i = 0; i<word.length; i++) {
        if( word[i] === " " && word[i+1] === " ")
        word.splice(i+1, 1)
    }
    word = word.join("")

    return word
};

let s = "is2 sentence4 This1 a3"
console.log(sortSentence(s));