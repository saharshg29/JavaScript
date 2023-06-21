// To print linearly from 1 to N using recursion

let recursion = (i,n) => {
    // let count = 0
    if (i> n) {
        return
    }
    console.log(i);
    recursion(i+1, n)
}

recursion(1,5)