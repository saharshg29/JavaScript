const isPallindroem = (x) => {
    let txt = x.toString(10);
    let reverse = txt.split('').reverse().join('')
    if (reverse === txt) {
        return true;
    }
    else {
        return false;
    }

}

let result = isPallindroem(121)

console.log(result);