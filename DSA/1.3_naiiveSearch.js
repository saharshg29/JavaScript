// Naive Search algorithm is an algorithm used to check the presence of a substring in a main string
// If substring is present in main string return true else return false

function naiveSearch(string, substring) {
    for (let i = 0; i<string.length; i++) {
        for(let j = 0; j<substring.length; j++){
            if (string[i+j] !== substring[j]) {
                break;
            }
            if (j === substring.length-1){
                return true
            }
        }
    }
    return false
}

let string = "Saharsh Gupta"
let substring = "hash"

console.log(naiveSearch(string,substring));