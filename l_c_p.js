// Longest Common Prefix

const checker = (strs) => {
    let max = strs[0].length;
    for (let i = 0; i < strs.length; i++) {
        if (max > strs[i].length) {
            max = strs[i].length;
            break;
        }
    }
    var ch = "";

    for (let i = 0; i < (strs.length - 2); i++) {
        for (let j = 0; j < max; j++) {

            if (strs[i][j] == strs[i + 1][j] && strs[i + 1][j] === strs[i + 2][j]) {
                ch += (strs[i][j])
            }

        }

    }
    return "";
}

let req = checker(["flower", "ow", "flight"])

console.log(req)