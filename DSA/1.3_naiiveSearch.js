// Naive Search algorithm is an algorithm used to check the presence of a substring in a main string
// If substring is present in main string return true else return false

// Use two loops one 

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

//i -> 0 0 0 0 0 0  0   0   1  2
//j -> 0 1 2 3 4 5 11  12   0  0
//c -> S a h a r s  t  a-x  

let string = "Saharsh Gupta"
let substring = "Saharsh Guptx" 

    console.log(naiveSearch(string,substring));