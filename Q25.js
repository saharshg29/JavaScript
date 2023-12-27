var mostWordsFound = function(sentences) {
    let words = 1;
    let length = []
    for (let i = 0; i<sentences.length; i++) {
        for (let j = 0; j<sentences[i].length; j++) {
            if (sentences[i][j] === " ") {
                words = words + 1;
            }
        }
        length[i] = words;
        words = 1
    }
    for (let i = 0; i<length.length; i++) {
        for (let j = i+1; j<length.length; j++) {
            if (length[i] > length[j]) {
                [length[i], length[j]] = [length[j], length[i]]
            }
        }
    }
    return length[sentences.length - 1]
    // return length

};


let answer = mostWordsFound(["brjmzkatznpzhomilyyhaerytedrrwrkpuujbncfncgs","u yn mwbuqymvtq z etdw p nx awixyietwg a jhsklavdagvhxdy","v moahq bfhrdhxobkyccxbwduwbgsgdbngviidlaj"])
console.log(answer);