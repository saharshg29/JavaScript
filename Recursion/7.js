// N factorial using recursion

let factorial = (n) => {
    if (n <= 0) {
        return 1
    }

    return n * factorial(n-1)
}

console.log(factorial(1000));

console.log( Infinity /Infinity);