// Pattern Printing Problem 2

let pattern = (n) => {
    if (n == 0) {
        return
    }

    let arr = []
    for (let i  = 1; i<=n; i++) [
        arr.push(i)
    ]
    console.log(...arr)
    pattern(n-1)
}

console.log(pattern(5));